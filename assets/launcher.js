// Register SW if not already controlling, then point the iframe at the site.
// Skip the wait on repeat visits.
(async function () {
  const BASE = location.pathname.replace(/\/[^/]*$/, '');
  const frame = document.querySelector('#frame');

  const hash = (location.hash || '').replace(/^#/, '').replace(/^\/+/, '');
  const targetUrl = BASE + '/static' + (hash ? '/' + hash : '/index.html');

  // Fast path: SW already controls this page — set iframe src immediately.
  if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    // Check for update in background, don't block.
    navigator.serviceWorker.register(BASE + '/sw.js', { scope: BASE + '/' }).catch(() => {});
    frame.src = targetUrl;
    return;
  }

  // Cold path: first visit / SW not yet active.
  try {
    if (!navigator.serviceWorker) throw new Error('no SW');
    const reg = await navigator.serviceWorker.register(BASE + '/sw.js', { scope: BASE + '/' });
    if (reg.installing) {
      await Promise.race([
        new Promise((resolve, reject) => {
          reg.installing.addEventListener('statechange', (e) => {
            if (e.target.state === 'activated') resolve();
            else if (e.target.state === 'redundant') reject(new Error('redundant'));
          });
        }),
        new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 8000))
      ]);
    }
    if (!navigator.serviceWorker.controller) {
      await navigator.serviceWorker.ready;
    }
  } catch (_) { /* iframe still loads, might get text/plain render */ }

  frame.src = targetUrl;
})();
