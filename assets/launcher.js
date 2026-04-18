// Register SW, then point the iframe at the real site. No chrome, no splash.
(async function () {
  const BASE = location.pathname.replace(/\/[^/]*$/, '');
  const frame = document.querySelector('#frame');

  const hash = (location.hash || '').replace(/^#/, '').replace(/^\/+/, '');
  const targetUrl = BASE + '/static' + (hash ? '/' + hash : '/index.html');

  try {
    if (navigator.serviceWorker) {
      const reg = await navigator.serviceWorker.register(BASE + '/sw.js', { scope: BASE + '/' });
      if (reg.installing) {
        await Promise.race([
          new Promise((resolve, reject) => {
            reg.installing.addEventListener('statechange', (e) => {
              if (e.target.state === 'activated') resolve();
              else if (e.target.state === 'redundant') reject(new Error('SW redundant'));
            });
          }),
          new Promise((_, rej) => setTimeout(() => rej(new Error('SW timeout')), 10000))
        ]);
      }
      if (!navigator.serviceWorker.controller) {
        await navigator.serviceWorker.ready;
      }
    }
  } catch (_) { /* best effort — iframe will still load, just without MIME fix */ }

  frame.src = targetUrl;
})();
