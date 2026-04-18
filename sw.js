// Service worker: lets the real Voidv5 index.html run on jsdelivr by
//   * fixing Content-Type for HTML/JS/etc (jsdelivr serves HTML as text/plain)
//   * rewriting absolute paths outside our base to /static/<path>
//   * stubbing the server-only routes the frontend expects (/~r/*, /api/*,
//     /s/*, /t/*, /cdn-cache/unpkg/*, /sw.js)
//   * injecting globals (__uv$config, LocalGameEncoder, lucide, umami,
//     gtag, dataLayer) + a click/nav interceptor into every HTML response.
var B = self.location.pathname.replace(/\/[^/]*$/, '');
var STATIC_BASE = B + '/static';

self.addEventListener('install',  function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(Promise.all([
    self.clients.claim(),
    self.registration.navigationPreload && self.registration.navigationPreload.enable()
  ]));
});

// ---- MIME rewriting ----
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
function withMime(p, r) {
  var want = mimeFor(p); if (!want) return r;
  var got = (r.headers.get('Content-Type') || '').toLowerCase();
  if (got.indexOf(want.split(';')[0].toLowerCase()) === 0) return r;
  var h = new Headers(r.headers);
  h.set('Content-Type', want);
  return new Response(r.body, { status: r.status, statusText: r.statusText, headers: h });
}

// ---- HTML interceptor injected into every HTML response ----
var PRELUDE = [
  '<script>(function(){',
  // Stub globals that the Voidv5 frontend pokes at before its own scripts finish loading.
  'try{window.__uv$config=window.__uv$config||{prefix:"/uv/",bare:"/bare/",encodeUrl:function(u){return encodeURIComponent(String(u))},decodeUrl:function(u){return decodeURIComponent(String(u))}};}catch(_){}',
  'try{window.LocalGameEncoder=window.LocalGameEncoder||{createEncodedLink:function(p){return p}};}catch(_){}',
  'try{window.lucide=window.lucide||{createIcons:function(){},icons:{}};}catch(_){}',
  'try{window.umami=window.umami||{track:function(){},identify:function(){}};}catch(_){}',
  'try{window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};}catch(_){}',
  'var BASE=' + JSON.stringify(STATIC_BASE) + ';',
  'function fix(u){if(!u||typeof u!=="string")return u;if(u.charAt(0)!=="/")return u;if(u.indexOf("/gh/")===0||u.indexOf("/npm/")===0||u.indexOf("/esm/")===0)return u;return BASE+u}',
  'document.addEventListener("click",function(e){if(e.defaultPrevented)return;var a=e.target.closest&&e.target.closest("a");if(!a)return;var h=a.getAttribute("href");if(!h)return;var f=fix(h);if(f===h)return;e.preventDefault();var t=a.getAttribute("target");if(t==="_blank")window.open(f,t);else window.location.assign(f)},true);',
  'var origOpen=window.open;window.open=function(u){arguments[0]=fix(u);return origOpen.apply(this,arguments)};',
  'document.addEventListener("submit",function(e){var f=e.target;if(!f||!f.action)return;try{var u=new URL(f.action);if(u.origin===location.origin){var p=u.pathname+u.search+u.hash;var fx=fix(p);if(fx!==p)f.action=fx}}catch(_){}},true);',
  // Patch Location.assign / replace / href setter and history.pushState / replaceState
  // so programmatic navigation (window.location.href = "/g.html?...", etc.)
  // stays inside our jsdelivr scope.
  'try{',
    'var LP=window.Location&&window.Location.prototype;',
    'if(LP){',
      'var oa=LP.assign,or=LP.replace;',
      'if(oa)LP.assign=function(u){return oa.call(this,fix(u))};',
      'if(or)LP.replace=function(u){return or.call(this,fix(u))};',
      'var dh=Object.getOwnPropertyDescriptor(LP,"href");',
      'if(dh&&dh.configurable&&dh.set){',
        'Object.defineProperty(LP,"href",{get:dh.get,set:function(v){dh.set.call(this,fix(v))},configurable:true,enumerable:dh.enumerable});',
      '}',
    '}',
  '}catch(_){}',
  'try{',
    'var hs=history.pushState,hr=history.replaceState;',
    'history.pushState=function(s,t,u){return hs.call(this,s,t,u==null?u:fix(u))};',
    'history.replaceState=function(s,t,u){return hr.call(this,s,t,u==null?u:fix(u))};',
  '}catch(_){}',
  '})();</script>'
].join('');

async function injectIntoHtml(response) {
  var ct = (response.headers.get('Content-Type') || '').toLowerCase();
  if (ct.indexOf('html') === -1) return response;
  var text = await response.text();
  // Rewrite bare-absolute paths ("/foo", "/foo/bar") that occur as values of
  // href / src / action / data-src / data-href attributes so the HTML-level
  // URLs are in-scope before any JS has a chance to read them.
  // Skip //something (protocol-relative) and anything already under /gh/ | /npm/ | /esm/.
  var out = text.replace(
    /(\s(?:href|src|action|data-src|data-href|formaction)\s*=\s*)(["'])\/(?![\/])(?!gh\/)(?!npm\/)(?!esm\/)/gi,
    function (m, attr, quote) { return attr + quote + STATIC_BASE + '/'; }
  );
  out = out.replace(/<head(\s[^>]*)?>/i, function (m) { return m + PRELUDE; });
  if (out === text) out = PRELUDE + out;
  var h = new Headers(response.headers);
  h.set('Content-Type', 'text/html; charset=utf-8');
  h.delete('Content-Length');
  return new Response(out, { status: response.status, statusText: response.statusText, headers: h });
}

// ---- stubs ----
function emptyJs()    { return new Response('/* stubbed */', { status: 200, headers: { 'Content-Type': 'application/javascript; charset=utf-8' } }); }
function emptyJson()  { return new Response('{}',            { status: 200, headers: { 'Content-Type': 'application/json; charset=utf-8' } }); }
function noContent()  { return new Response('',              { status: 204 }); }

// Map `/~r/N/...` and other known-server paths onto static replacements.
// Returns null if path is not a known stub.
function resolveServerPath(p) {
  // /~r/1/ → scramjet runtime
  if (p.indexOf('/~r/1/') === 0) return B + '/runtime/scramjet/' + p.slice(6);
  // /~r/2/ → baremux
  if (p.indexOf('/~r/2/') === 0) return B + '/runtime/baremux/'  + p.slice(6);
  // /~r/3/ → epoxy
  if (p.indexOf('/~r/3/') === 0) return B + '/runtime/epoxy/'    + p.slice(6);
  // /~r/7/ → UV bundles (live in static/lib/uv on Voidv5)
  if (p.indexOf('/~r/7/') === 0) return B + '/static/lib/uv/'    + p.slice(6);
  return null;
}

async function serveFixed(pathname, requestOrUrl, urlOverride) {
  var fetchUrl = urlOverride || (typeof requestOrUrl === 'string' ? requestOrUrl : requestOrUrl.url);
  var opts = {};
  if (typeof requestOrUrl !== 'string') {
    opts.credentials = requestOrUrl.credentials;
    opts.cache = requestOrUrl.cache;
    opts.redirect = requestOrUrl.redirect;
  }
  var r = await fetch(fetchUrl, opts);
  r = withMime(pathname, r);
  r = await injectIntoHtml(r);
  return r;
}

self.addEventListener('fetch', function (event) {
  var url;
  try { url = new URL(event.request.url); } catch (_) { return; }
  if (url.origin !== self.location.origin) return;

  var p = url.pathname;
  var method = event.request.method;

  // Under our base — fetch, fix MIME, inject globals into HTML.
  if (p.indexOf(B + '/') === 0 || p === B) {
    if (mimeFor(p) || /\.html?$/i.test(p) || /\/$/.test(p)) {
      event.respondWith(serveFixed(p, event.request).catch(function (e) {
        return new Response('SW error: ' + (e && e.message || e), { status: 502 });
      }));
    }
    return;
  }

  // Out-of-scope absolute paths — start by mapping known server-only paths.
  if (method !== 'GET' && method !== 'HEAD') return;

  // 0a. Other jsdelivr paths (/gh/<other-repo>, /npm/<pkg>, /esm/<pkg>) — pass
  //     through to the browser so jsdelivr serves them directly. Don't
  //     rewrite, don't redirect.
  if (p.indexOf('/gh/') === 0 || p.indexOf('/npm/') === 0 || p.indexOf('/esm/') === 0) {
    return;
  }

  // 0. Stubs for specific Voidv5 scripts that don't work standalone.
  //    scramjet-preload tries to set up a SharedWorker whose wisp transport
  //    won't connect; without a stub it spins in a "no MessagePort" retry
  //    loop forever and pegs the CPU.
  if (p === '/assets/js/scramjet-preload.js' ||
      p.indexOf('/assets/js/adsence-tracking.js') === 0 ||
      p === '/lib/pf.js' ||
      p === '/popup-listener.js') {
    event.respondWith(Promise.resolve(emptyJs()));
    return;
  }

  // 0b. Navigation requests (iframe src=, location.href=) to paths outside
  //    our base need to become REAL redirects to the in-base URL — so the
  //    iframe's document URL ends up inside our SW scope, keeping the SW
  //    attached to the new page. Otherwise the iframe navigates to an
  //    unscoped URL and every subresource request escapes.
  var isNav = event.request.mode === 'navigate' ||
              event.request.destination === 'document' ||
              event.request.destination === 'iframe';
  if (isNav) {
    // Skip known stubs below that aren't actually docs (shouldn't reach here anyway)
    if (p.indexOf('/api/') !== 0 && p.indexOf('/s/') !== 0 && p.indexOf('/t/') !== 0 && p !== '/sw.js') {
      var target = url.origin + STATIC_BASE + p + url.search + url.hash;
      // /~r/N/ navigations should go to the library path, not /static
      var mappedNav = resolveServerPath(p);
      if (mappedNav) target = url.origin + mappedNav + url.search + url.hash;
      // /cdn-cache navigations — unlikely but for completeness
      if (p.indexOf('/cdn-cache/unpkg/') === 0) target = 'https://cdn.jsdelivr.net/npm/' + p.slice('/cdn-cache/unpkg/'.length) + url.search;
      event.respondWith(Response.redirect(target, 302));
      return;
    }
  }

  // 1. Mirrored library paths (/~r/N/...)
  var mapped = resolveServerPath(p);
  if (mapped) {
    event.respondWith(serveFixed(p, event.request, url.origin + mapped + url.search).catch(function () {
      return fetch(event.request);
    }));
    return;
  }

  // 2. /cdn-cache/unpkg/<pkg> — redirect to jsdelivr's npm mirror
  if (p.indexOf('/cdn-cache/unpkg/') === 0) {
    var pkg = p.slice('/cdn-cache/unpkg/'.length);
    event.respondWith(serveFixed(p, event.request, 'https://cdn.jsdelivr.net/npm/' + pkg + url.search).catch(function () {
      return emptyJs();
    }));
    return;
  }

  // 3. /api/* — return sensible empty shapes. The frontend expects specific
  //    keys for some endpoints or throws "Failed to load ratings".
  if (p.indexOf('/api/') === 0) {
    var body = '{}';
    if (p === '/api/game-ratings')     body = '{"success":true,"ratings":{}}';
    else if (p === '/api/game-play-counts') body = '{}';
    else if (p === '/api/ps')          body = '{"success":true}';
    event.respondWith(new Response(body, { status: 200, headers: { 'Content-Type': 'application/json; charset=utf-8' } }));
    return;
  }

  // 4. /s/* — umami tracking scripts (stub)
  if (p.indexOf('/s/') === 0) {
    event.respondWith(Promise.resolve(emptyJs()));
    return;
  }

  // 5. /t/* — umami tracking pixel (noop)
  if (p.indexOf('/t/') === 0) {
    event.respondWith(Promise.resolve(noContent()));
    return;
  }

  // 6. /sw.js (absolute, from inside iframe) — return empty SW
  if (p === '/sw.js') {
    event.respondWith(new Response('/* no-op SW */', { status: 200, headers: { 'Content-Type': 'application/javascript; charset=utf-8' } }));
    return;
  }

  // 7. Everything else under absolute path → /static/<path>
  var newUrl = url.origin + STATIC_BASE + p + url.search;
  event.respondWith(
    serveFixed(p, event.request, newUrl).then(function (r) {
      if (r.status === 404) return fetch(event.request);
      return r;
    }).catch(function () { return fetch(event.request); })
  );
});
