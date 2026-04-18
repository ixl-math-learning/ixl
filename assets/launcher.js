// Register the SW (awaits first-visit activation because jsdelivr serves
// HTML as text/plain + nosniff; the iframe needs our SW to rewrite the
// MIME before the navigation happens, or the browser would render the
// response as raw text).
(async function () {
  const BASE = location.pathname.replace(/\/[^/]*$/, '');
  const frame = document.querySelector('#frame');
  const cloak = document.querySelector('#cloak');

  function reveal() {
    if (cloak) {
      cloak.classList.add('done');
      setTimeout(() => { cloak.style.display = 'none'; }, 250);
    }
  }
  if (frame) frame.addEventListener('load', reveal);

  const hash = (location.hash || '').replace(/^#/, '').replace(/^\/+/, '');
  const targetUrl = BASE + '/static' + (hash ? '/' + hash : '/index.html');

  // Fast path: SW already controls this page (repeat visit) — set src now.
  if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.register(BASE + '/sw.js', { scope: BASE + '/' }).catch(() => {});
    frame.src = targetUrl;
    return;
  }

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
  } catch (_) { /* try iframe anyway */ }

  frame.src = targetUrl;
})();
