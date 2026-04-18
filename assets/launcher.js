// Minimal shell: register SW (for MIME + path rewriting when games open),
// then iframe our Voidv5-styled launcher page.
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

  if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.register(BASE + '/sw.js', { scope: BASE + '/' }).catch(() => {});
    frame.src = BASE + '/launcher-app.html' + location.hash;
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
    if (!navigator.serviceWorker.controller) await navigator.serviceWorker.ready;
  } catch (_) {}

  frame.src = BASE + '/launcher-app.html' + location.hash;
})();
