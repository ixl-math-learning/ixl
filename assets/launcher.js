// Launcher — loads gg.js, renders a native games grid, and iframes each
// game directly from this repo (no scramjet for local). External games
// still route through scramjet.
(async function () {
  const BASE = location.pathname.replace(/\/[^/]*$/, '');
  const WISP = 'wss://vng.lol/~r/9/';

  const $ = (sel) => document.querySelector(sel);
  const splash = $('#splash');
  const home   = $('#home');
  const grid   = $('#grid');
  const frame  = $('#frame');
  const backBtn = $('#back');
  const search = $('#search');

  let statusEl = null;
  let errEl = null;
  if (splash) {
    splash.innerHTML = '<div style="text-align:center;max-width:560px;padding:24px">' +
      '<div class="spin"></div>' +
      '<div id="st" class="st">Starting up\u2026</div>' +
      '<pre id="errbox" class="err" style="display:none"></pre>' +
      '</div>';
    statusEl = splash.querySelector('#st');
    errEl    = splash.querySelector('#errbox');
  }
  function setStatus(m) { try { console.log('[launcher]', m); } catch(_){} if (statusEl) statusEl.textContent = m; }
  function showErr(e) {
    const msg = (e && e.stack) ? e.stack : (e && e.message) ? e.message : String(e);
    try { console.error('[launcher]', e); } catch(_){}
    if (errEl) { errEl.textContent = msg; errEl.style.display = 'block'; }
    if (statusEl) statusEl.textContent = 'Startup failed — see details below';
  }

  // gg.js uses __uv$config.encodeUrl and LocalGameEncoder.createEncodedLink
  // at module eval time. Define stubs so parsing succeeds; we decide the
  // real target at click time based on the link string.
  window.LocalGameEncoder = { createEncodedLink: (p) => p };
  window.__uv$config = {
    prefix: '/uv/',
    encodeUrl: (u) => encodeURIComponent(u),
    decodeUrl: (u) => decodeURIComponent(u),
  };
  // makeScramjetLink is defined inside gg.js itself — no stub needed.

  let scramjetController = null;
  let swReady = false;

  async function init() {
    setStatus('Loading BareMux\u2026');
    const { BareMuxConnection } = await import(BASE + '/runtime/baremux/index.mjs');
    const conn = new BareMuxConnection(BASE + '/runtime/baremux/worker.js');

    setStatus('Setting up wisp transport\u2026');
    await Promise.race([
      conn.setTransport(BASE + '/runtime/epoxy/index.mjs', [{ wisp: WISP }]),
      new Promise((_, rej) => setTimeout(() => rej(new Error('Transport setup timeout (10s)')), 10000))
    ]);

    setStatus('Loading Scramjet\u2026');
    await new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = BASE + '/runtime/scramjet/scramjet.all.js';
      s.onload = resolve;
      s.onerror = () => reject(new Error('Failed to load scramjet.all.js'));
      document.head.appendChild(s);
    });
    if (typeof window.$scramjetLoadController !== 'function') {
      throw new Error('Scramjet loader missing after bundle load');
    }
    const { ScramjetController } = window.$scramjetLoadController();
    scramjetController = new ScramjetController({
      prefix: BASE + '/scrammy/',
      files: {
        wasm: BASE + '/runtime/scramjet/scramjet.wasm.wasm',
        all:  BASE + '/runtime/scramjet/scramjet.all.js',
        sync: BASE + '/runtime/scramjet/scramjet.sync.js'
      },
      flags: {
        serviceworkers: false, syncxhr: false, strictRewrites: false,
        rewriterLogs: false, captureErrors: false, cleanErrors: false,
        scramitize: false, sourcemaps: false, destructureRewrites: false,
        interceptDownloads: false, allowInvalidJs: true
      }
    });
    await scramjetController.init();
    try { window.scramjet = scramjetController; } catch(_){}

    setStatus('Registering service worker\u2026');
    if (!navigator.serviceWorker) throw new Error('Service workers not supported here');
    const reg = await navigator.serviceWorker.register(BASE + '/sw.js', { scope: BASE + '/' });
    if (reg.installing) {
      await Promise.race([
        new Promise((resolve, reject) => {
          reg.installing.addEventListener('statechange', (e) => {
            if (e.target.state === 'activated') resolve();
            else if (e.target.state === 'redundant') reject(new Error('SW became redundant'));
          });
        }),
        new Promise((_, rej) => setTimeout(() => rej(new Error('SW activation timeout (10s)')), 10000))
      ]);
    }
    if (!navigator.serviceWorker.controller) {
      await navigator.serviceWorker.ready;
      await new Promise(r => setTimeout(r, 150));
    }
    swReady = true;

    setStatus('Loading game catalog\u2026');
    await new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = BASE + '/static/assets/gg/gg.js';
      s.onload = resolve;
      s.onerror = () => reject(new Error('Failed to load gg.js'));
      document.head.appendChild(s);
    });
    if (!Array.isArray(window.gamesData)) throw new Error('gamesData missing after gg.js load');
  }

  function resolveLink(link) {
    if (typeof link !== 'string') return null;
    if (link.startsWith('__SCRAMJET__')) {
      const url = link.slice('__SCRAMJET__'.length);
      return { kind: 'scram', url };
    }
    if (link.startsWith('/uv/')) {
      try { return { kind: 'scram', url: decodeURIComponent(link.slice(4)) }; }
      catch(_) { return { kind: 'scram', url: link.slice(4) }; }
    }
    // Plain local path — lives under /static/ in this repo
    const path = link.startsWith('/') ? link : '/' + link;
    return { kind: 'local', url: BASE + '/static' + path };
  }

  function resolveImg(src) {
    if (!src) return '';
    if (/^https?:\/\//i.test(src)) return src;   // absolute URL, use as-is
    const path = src.startsWith('/') ? src : '/' + src;
    return BASE + '/static' + path;
  }

  function labelFor(link) {
    if (link.startsWith('__SCRAMJET__')) return 'PROXY';
    if (link.startsWith('/uv/')) return 'PROXY';
    return '';
  }

  function renderGrid(query) {
    grid.innerHTML = '';
    const q = (query || '').toLowerCase().trim();
    const games = window.gamesData.filter(g => !q || (g.title || '').toLowerCase().includes(q));
    if (!games.length) {
      grid.innerHTML = '<div class="empty">No games match \u201C' + q + '\u201D</div>';
      return;
    }
    const frag = document.createDocumentFragment();
    for (const game of games) {
      const wrap = document.createElement('div');
      wrap.className = 'tile-wrap';
      const tile = document.createElement('div');
      tile.className = 'tile';
      const img = document.createElement('img');
      img.loading = 'lazy';
      img.src = resolveImg(game.imgSrc);
      img.alt = '';
      img.onerror = () => { img.style.background = '#1f1f1f'; img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><rect fill="%231f1f1f" width="1" height="1"/></svg>'; };
      const title = document.createElement('div');
      title.className = 'title';
      title.textContent = game.title || '';
      tile.appendChild(img);
      tile.appendChild(title);
      tile.addEventListener('click', () => play(game));
      wrap.appendChild(tile);
      const tag = labelFor(game.link);
      if (tag) {
        const t = document.createElement('span');
        t.className = 'tag';
        t.textContent = tag;
        wrap.appendChild(t);
      }
      frag.appendChild(wrap);
    }
    grid.appendChild(frag);
  }

  function play(game) {
    const resolved = resolveLink(game.link);
    if (!resolved) return;
    let src;
    if (resolved.kind === 'local') {
      src = resolved.url;
    } else {
      if (!swReady) { showErr(new Error('Proxy not ready yet')); return; }
      src = scramjetController && typeof scramjetController.encodeUrl === 'function'
        ? scramjetController.encodeUrl(resolved.url)
        : (BASE + '/scrammy/' + encodeURIComponent(resolved.url));
    }
    home.classList.add('hide');
    frame.classList.add('on');
    backBtn.style.display = 'inline-block';
    frame.src = src;
  }

  function backToHome() {
    frame.classList.remove('on');
    frame.src = 'about:blank';
    backBtn.style.display = 'none';
    home.classList.remove('hide');
  }

  backBtn.addEventListener('click', backToHome);
  if (search) {
    let t;
    search.addEventListener('input', (e) => {
      clearTimeout(t);
      t = setTimeout(() => renderGrid(e.target.value), 120);
    });
  }

  try {
    await init();
    renderGrid('');
    if (splash) {
      splash.classList.add('done');
      setTimeout(() => { splash.style.display = 'none'; }, 400);
    }
  } catch (e) { showErr(e); }
})();
