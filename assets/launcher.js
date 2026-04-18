// Fire-and-forget SW register; set the iframe immediately.
(function () {
  const BASE = location.pathname.replace(/\/[^/]*$/, '');
  const frame = document.querySelector('#frame');

  if (navigator.serviceWorker) {
    navigator.serviceWorker.register(BASE + '/sw.js', { scope: BASE + '/' }).catch(() => {});
  }

  const hash = (location.hash || '').replace(/^#/, '').replace(/^\/+/, '');
  frame.src = BASE + '/static' + (hash ? '/' + hash : '/index.html');
})();
