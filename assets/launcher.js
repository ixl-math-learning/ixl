// Minimal shell: register the SW (which rewrites jsdelivr MIME types and
// translates absolute paths into /gh/<owner>/<repo>@<ref>/static/<path>),
// then iframe the real Void Network index.html so the user gets the
// actual site UI, not a custom launcher.
(async function () {
  const BASE = location.pathname.replace(/\/[^/]*$/, '');

  const $ = (sel) => document.querySelector(sel);
  const splash = $('#splash');
  const frame  = $('#frame');
  let statusEl = null;
  let errEl = null;
  if (splash) {
    splash.innerHTML =
      '<div style="text-align:center;max-width:560px;padding:24px">' +
      '<div class="spin"></div>' +
      '<div id="st" class="st">Starting\u2026</div>' +
      '<pre id="errbox" class="err" style="display:none"></pre>' +
      '</div>';
    statusEl = splash.querySelector('#st');
    errEl    = splash.querySelector('#errbox');
  }
  const setStatus = (m) => { try { console.log('[launcher]', m); } catch (_) {} if (statusEl) statusEl.textContent = m; };
  const showErr = (e) => {
    const msg = (e && e.stack) ? e.stack : (e && e.message) ? e.message : String(e);
    try { console.error('[launcher]', e); } catch (_) {}
    if (errEl) { errEl.textContent = msg; errEl.style.display = 'block'; }
    if (statusEl) statusEl.textContent = 'Startup failed — see details below';
  };

  frame.addEventListener('load', () => {
    if (!splash) return;
    splash.classList.add('done');
    setTimeout(() => { splash.style.display = 'none'; }, 400);
  });

  try {
    if (!navigator.serviceWorker) throw new Error('Service workers not supported in this context');
    setStatus('Installing service worker\u2026');
    const reg = await navigator.serviceWorker.register(BASE + '/sw.js', { scope: BASE + '/' });
    if (reg.installing) {
      await Promise.race([
        new Promise((resolve, reject) => {
          reg.installing.addEventListener('statechange', (e) => {
            if (e.target.state === 'activated') resolve();
            else if (e.target.state === 'redundant') reject(new Error('SW became redundant during install'));
          });
        }),
        new Promise((_, rej) => setTimeout(() => rej(new Error('SW activation timeout (10s)')), 10000))
      ]);
    }
    if (!navigator.serviceWorker.controller) {
      await navigator.serviceWorker.ready;
      await new Promise(r => setTimeout(r, 150));
    }
    setStatus('Loading Void Network\u2026');
    // Hash routing: #/view.html → open that specific page, #/ or empty → homepage
    const hash = (location.hash || '').replace(/^#/, '').replace(/^\/+/, '');
    const targetPath = hash ? '/' + hash : '/index.html';
    frame.src = BASE + '/static' + targetPath;
  } catch (e) {
    showErr(e);
  }
})();
