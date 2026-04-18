// Minimal shell: install SW, iframe the real Voidv5 index.html. The SW
// takes care of MIME rewriting, injecting globals, stubbing /api/* and
// /~r/*, redirecting /cdn-cache/* to jsdelivr's npm mirror, etc.
(async function () {
  const BASE  = location.pathname.replace(/\/[^/]*$/, '');
  const frame = document.querySelector('#frame');
  const cloak = document.querySelector('#cloak');

  function reveal() {
    if (!cloak) return;
    cloak.classList.add('done');
    setTimeout(() => { cloak.style.display = 'none'; }, 250);
  }
  if (frame) frame.addEventListener('load', reveal);

  const hash = (location.hash || '').replace(/^#/, '').replace(/^\/+/, '');
  const targetUrl = BASE + '/static' + (hash ? '/' + hash : '/index.html');

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
  } catch (_) {}

  frame.src = targetUrl;
})();
