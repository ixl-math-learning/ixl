// Minimal service worker:
//   * fix Content-Type for HTML/JS/etc (jsdelivr serves HTML as text/plain)
//   * rewrite absolute paths from inside iframed games to /static/<path>
//   * inject a click/nav interceptor into every HTML response so absolute
//     links (href="/foo") navigate to /gh/<owner>/<repo>@<ref>/static/foo
//     instead of escaping to the CDN origin and hitting jsdelivr's
//     "Invalid URL" error.
var B = self.location.pathname.replace(/\/[^/]*$/, '');
var STATIC_BASE = B + '/static';

self.addEventListener('install',  function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(Promise.all([
    self.clients.claim(),
    self.registration.navigationPreload && self.registration.navigationPreload.enable()
  ]));
});

function mimeFor(p) {
  var ext = (p.match(/\.([a-z0-9]+)(?:$|\?)/i) || [])[1];
  if (!ext) return null;
  ext = ext.toLowerCase();
  return ({
    html: 'text/html; charset=utf-8',
    htm:  'text/html; charset=utf-8',
    xhtml:'application/xhtml+xml; charset=utf-8',
    js:   'application/javascript; charset=utf-8',
    mjs:  'application/javascript; charset=utf-8',
    cjs:  'application/javascript; charset=utf-8',
    css:  'text/css; charset=utf-8',
    wasm: 'application/wasm',
    json: 'application/json; charset=utf-8',
    svg:  'image/svg+xml',
  })[ext] || null;
}

function withFixedMime(p, r) {
  var want = mimeFor(p);
  if (!want) return r;
  var got = (r.headers.get('Content-Type') || '').toLowerCase();
  if (got.indexOf(want.split(';')[0].toLowerCase()) === 0) return r;
  var h = new Headers(r.headers);
  h.set('Content-Type', want);
  return new Response(r.body, { status: r.status, statusText: r.statusText, headers: h });
}

// The interceptor that gets injected into every HTML response. It rewrites
// absolute-path link clicks, window.open calls, and direct location writes
// so the iframe stays under /gh/<owner>/<repo>@<ref>/static/<path>.
var INTERCEPTOR = [
  '<script>',
  '(function(){',
    'var BASE=' + JSON.stringify(STATIC_BASE) + ';',
    'function fix(u){',
      'if(!u||typeof u!=="string")return u;',
      'if(u.charAt(0)!=="/")return u;',
      'if(u.indexOf("/gh/")===0||u.indexOf("/npm/")===0||u.indexOf("/esm/")===0)return u;',
      'return BASE+u;',
    '}',
    'document.addEventListener("click",function(e){',
      'if(e.defaultPrevented)return;',
      'var a=e.target.closest&&e.target.closest("a");',
      'if(!a)return;',
      'var h=a.getAttribute("href");',
      'if(!h)return;',
      'var fixed=fix(h);',
      'if(fixed===h)return;',
      'e.preventDefault();',
      'var t=a.getAttribute("target");',
      'if(t==="_blank")window.open(fixed,t);else window.location.href=fixed;',
    '},true);',
    'var origOpen=window.open;',
    'window.open=function(u){arguments[0]=fix(u);return origOpen.apply(this,arguments)};',
    'document.addEventListener("submit",function(e){',
      'var f=e.target;if(!f||!f.action)return;',
      'try{var u=new URL(f.action);if(u.origin===location.origin){var fixed=fix(u.pathname+u.search+u.hash);if(fixed!==u.pathname+u.search+u.hash)f.action=fixed}}catch(_){}',
    '},true);',
  '})();',
  '</script>'
].join('');

function injectInterceptor(response, pathname) {
  var ct = (response.headers.get('Content-Type') || '').toLowerCase();
  if (ct.indexOf('html') === -1) return response;
  return response.text().then(function (text) {
    var injected = text.replace(/<head(\s[^>]*)?>/i, function (m) { return m + INTERCEPTOR; });
    if (injected === text) injected = INTERCEPTOR + text;
    var h = new Headers(response.headers);
    h.set('Content-Type', 'text/html; charset=utf-8');
    h.delete('Content-Length');
    return new Response(injected, { status: response.status, statusText: response.statusText, headers: h });
  });
}

async function serveFixed(pathname, request, urlOverride) {
  var fetchUrl = urlOverride || request.url;
  var r = await fetch(fetchUrl, {
    credentials: request.credentials,
    cache: request.cache,
    redirect: request.redirect
  });
  r = withFixedMime(pathname, r);
  r = await injectInterceptor(r, pathname);
  return r;
}

self.addEventListener('fetch', function (event) {
  var url;
  try { url = new URL(event.request.url); } catch (_) { return; }
  if (url.origin !== self.location.origin) return;

  var p = url.pathname;
  var method = event.request.method;

  // Under our base: fetch from jsdelivr, fix MIME, inject interceptor into HTML.
  if (p.indexOf(B + '/') === 0 || p === B) {
    if (mimeFor(p) || /\.html?$/i.test(p) || p === B || p === B + '/' || /\/$/.test(p)) {
      event.respondWith(serveFixed(p, event.request).catch(function (e) {
        return new Response('SW error: ' + (e && e.message || e), { status: 502 });
      }));
    }
    return;
  }

  // Absolute path outside our base (e.g., "/assets/foo.js" from a game iframe).
  // Rewrite to BASE + /static + <path>. GET/HEAD only.
  if (method !== 'GET' && method !== 'HEAD') return;

  var newUrl = url.origin + B + '/static' + p + url.search;
  event.respondWith(
    serveFixed(p, event.request, newUrl).catch(function () { return fetch(event.request); })
  );
});
