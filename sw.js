// Minimal service worker:
//   * fix Content-Type for HTML/JS/etc (jsdelivr serves HTML as text/plain)
//   * rewrite absolute paths from inside iframed games to /static/<path>
// No Scramjet/UV bundles — install is near-instant.
var B = self.location.pathname.replace(/\/[^/]*$/, '');

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

self.addEventListener('fetch', function (event) {
  var url;
  try { url = new URL(event.request.url); } catch (_) { return; }
  if (url.origin !== self.location.origin) return;

  var p = url.pathname;

  // Under our base: fetch normally, only wrap if we need to fix MIME.
  if (p.indexOf(B + '/') === 0 || p === B) {
    if (mimeFor(p)) {
      event.respondWith(fetch(event.request).then(function (r) { return withFixedMime(p, r); }));
    }
    return;
  }

  // Absolute path outside our base (e.g., "/assets/foo.js" from a game iframe).
  // Rewrite to BASE + /static + <path>. GET/HEAD only.
  var method = event.request.method;
  if (method !== 'GET' && method !== 'HEAD') return;

  var newUrl = url.origin + B + '/static' + p + url.search;
  event.respondWith(
    fetch(newUrl, { credentials: event.request.credentials, cache: event.request.cache, redirect: event.request.redirect })
      .then(function (r) {
        if (r.status === 404) return fetch(event.request);
        return withFixedMime(p, r);
      })
      .catch(function () { return fetch(event.request); })
  );
});
