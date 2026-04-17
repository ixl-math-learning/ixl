// Service worker: scope = directory containing this file (i.e. the repo root
// on jsdelivr). Handles three classes of request:
//   1. /scrammy/* and /uv/* under BASE → proxy via Scramjet / Ultraviolet
//   2. Anything already under BASE/ → pass through (normal jsdelivr serve)
//   3. Absolute paths NOT under BASE (e.g. "/assets/foo.js" emitted from
//      inside a game iframe) → rewrite to BASE/static + path, so local games
//      that use absolute paths still find their dependencies under this repo.
var B = self.location.pathname.replace(/\/[^/]*$/, '');
importScripts(
  B + '/runtime/uv/uv.bundle.js',
  B + '/runtime/uv/uv.config.js',
  B + '/runtime/uv/uv.sw.js',
  B + '/runtime/scramjet/scramjet.all.js'
);

var uv = new UVServiceWorker();
var scramjet = new ($scramjetLoadWorker().ScramjetServiceWorker)();

var cfgLoaded = false, cfgTried = false, cfgPromise = null;

self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(Promise.all([
    self.clients.claim(),
    self.registration.navigationPreload && self.registration.navigationPreload.enable()
  ]));
});

function loadingPage() {
  return new Response(
    '<!doctype html><meta charset=utf-8><body style="background:#1f1f1f;color:#e8eaed;font-family:system-ui;display:flex;align-items:center;justify-content:center;height:100vh;margin:0"><div style="text-align:center"><p>Loading\u2026</p><script>setTimeout(function(){location.reload()},2500)</script></div>',
    { status: 200, headers: { 'Content-Type': 'text/html' } }
  );
}

async function handleProxy(event) {
  try {
    if (uv.route(event)) {
      try { return await uv.fetch(event); }
      catch (_) { return event.request.destination === 'document' || event.request.destination === 'iframe' ? loadingPage() : new Response('', { status: 502 }); }
    }
  } catch (_) {}

  if (!cfgLoaded && !cfgTried) {
    if (!cfgPromise) {
      cfgPromise = Promise.race([
        scramjet.loadConfig(),
        new Promise(function (_, r) { setTimeout(function () { r(new Error('cfg timeout')); }, 5000); })
      ]).then(function () { cfgLoaded = true; cfgTried = true; })
        .catch(function () { cfgTried = true; });
    }
    await cfgPromise;
  }

  try {
    if (scramjet.route(event)) {
      try { return await scramjet.fetch(event); }
      catch (_) { return event.request.destination === 'document' || event.request.destination === 'iframe' ? loadingPage() : new Response('', { status: 502 }); }
    }
  } catch (_) {}

  return fetch(event.request).catch(function () { return new Response('Network error', { status: 502 }); });
}

self.addEventListener('fetch', function (event) {
  var url;
  try { url = new URL(event.request.url); } catch (_) { return; }
  if (url.origin !== self.location.origin) return;

  var p = url.pathname;

  // 1. Proxy routes
  if (p.indexOf(B + '/uv/') === 0 || p.indexOf(B + '/scrammy/') === 0 || p.indexOf(B + '/bare/') === 0) {
    event.respondWith(handleProxy(event).catch(function () { return new Response('SW error', { status: 502 }); }));
    return;
  }

  // 2. Under our base — pass through to network
  if (p.indexOf(B + '/') === 0 || p === B) return;

  // 3. Absolute path outside BASE — rewrite to BASE/static<path>
  //    Only for GET/HEAD; anything else we let pass (rare, avoid mangling).
  var method = event.request.method;
  if (method !== 'GET' && method !== 'HEAD') return;

  var newUrl = url.origin + B + '/static' + p + url.search;
  event.respondWith(
    fetch(newUrl, { credentials: event.request.credentials, cache: event.request.cache, redirect: event.request.redirect })
      .then(function (r) {
        if (r.status === 404) return fetch(event.request);
        return r;
      })
      .catch(function () { return fetch(event.request); })
  );
});
