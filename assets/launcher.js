// Custom launcher: stubs the globals that gg.js expects, ES-module-imports
// the game catalog, renders a minimal Voidv5-themed grid, and iframes games
// directly from this repo. External / proxied games lazy-init Scramjet.
(async function () {
  const BASE = location.pathname.replace(/\/[^/]*$/, '');
  const WISP = 'wss://vng.lol/~r/9/';

  // ---- globals gg.js expects at module-eval time ----
  window.LocalGameEncoder = { createEncodedLink: (p) => p };
  window.__uv$config = {
    prefix: '/uv/',
    encodeUrl: (u) => encodeURIComponent(String(u)),
    decodeUrl: (u) => decodeURIComponent(String(u)),
  };

  const $ = (s) => document.querySelector(s);
  const grid  = $('#grid');
  const frame = $('#frame');
  const back  = $('#back');
  const input = $('#search');
  const cloak = $('#cloak');

  function cloakOff() {
    if (!cloak) return;
    cloak.classList.add('done');
    setTimeout(() => { cloak.style.display = 'none'; }, 250);
  }

  // Register SW in background — we don't need it for local games (they go
  // straight to /gh/.../static/...), but it rewrites MIME + absolute paths
  // once active so the iframe'd game content behaves.
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register(BASE + '/sw.js', { scope: BASE + '/' }).catch(() => {});
  }

  let gamesData = [];
  try {
    const mod = await import(BASE + '/static/assets/gg/gg.js');
    gamesData = mod.gamesData || [];
  } catch (e) {
    console.error('gg.js failed to load', e);
  }

  // --- link dispatcher ---
  let scramjetReady = null;
  async function ensureScramjet() {
    if (scramjetReady) return scramjetReady;
    scramjetReady = (async () => {
      const { BareMuxConnection } = await import(BASE + '/runtime/baremux/index.mjs');
      const conn = new BareMuxConnection(BASE + '/runtime/baremux/worker.js');
      await conn.setTransport(BASE + '/runtime/epoxy/index.mjs', [{ wisp: WISP }]);
      await new Promise((res, rej) => {
        const s = document.createElement('script');
        s.src = BASE + '/runtime/scramjet/scramjet.all.js';
        s.onload = res; s.onerror = () => rej(new Error('scramjet load failed'));
        document.head.appendChild(s);
      });
      const { ScramjetController } = window.$scramjetLoadController();
      const controller = new ScramjetController({
        prefix: BASE + '/scrammy/',
        files: {
          wasm: BASE + '/runtime/scramjet/scramjet.wasm.wasm',
          all:  BASE + '/runtime/scramjet/scramjet.all.js',
          sync: BASE + '/runtime/scramjet/scramjet.sync.js',
        },
        flags: {
          serviceworkers: false, syncxhr: false, strictRewrites: false,
          rewriterLogs: false, captureErrors: false, cleanErrors: false,
          scramitize: false, sourcemaps: false, destructureRewrites: false,
          interceptDownloads: false, allowInvalidJs: true,
        },
      });
      await controller.init();
      window.scramjet = controller;
      return controller;
    })();
    return scramjetReady;
  }

  function openFrame(src) {
    frame.src = src;
    frame.classList.add('on');
    if (back) back.classList.add('on');
  }
  function closeFrame() {
    frame.classList.remove('on');
    if (back) back.classList.remove('on');
    frame.src = 'about:blank';
  }

  async function play(game) {
    const link = String(game.link || '');
    if (link.startsWith('__SCRAMJET__')) {
      const url = link.slice('__SCRAMJET__'.length);
      const sc = await ensureScramjet();
      openFrame(sc.encodeUrl(url));
      return;
    }
    if (link.startsWith('/uv/')) {
      const url = decodeURIComponent(link.slice(4));
      const sc = await ensureScramjet();
      openFrame(sc.encodeUrl(url));
      return;
    }
    // Plain local path — direct to jsdelivr under our repo.
    const path = link.startsWith('/') ? link : '/' + link;
    openFrame(BASE + '/static' + path);
  }

  function resolveImg(src) {
    if (!src) return '';
    if (/^https?:\/\//i.test(src)) return src;
    const path = src.startsWith('/') ? src : '/' + src;
    return BASE + '/static' + path;
  }

  function render(filter) {
    const q = (filter || '').trim().toLowerCase();
    const items = gamesData.filter(g => !q || (g.title || '').toLowerCase().includes(q));
    grid.innerHTML = '';
    const frag = document.createDocumentFragment();
    for (const g of items) {
      const card = document.createElement('div');
      card.className = 'card';
      const img = document.createElement('img');
      img.loading = 'lazy';
      img.src = resolveImg(g.imgSrc);
      img.alt = '';
      img.onerror = () => { img.style.background = '#121212'; img.removeAttribute('src'); };
      const title = document.createElement('div');
      title.className = 'cardt';
      title.textContent = g.title || '';
      card.appendChild(img);
      card.appendChild(title);
      card.addEventListener('click', () => play(g));
      frag.appendChild(card);
    }
    grid.appendChild(frag);
    if (!items.length) {
      grid.innerHTML = '<div class="empty">No games found.</div>';
    }
  }

  if (input) {
    let t;
    input.addEventListener('input', (e) => {
      clearTimeout(t);
      t = setTimeout(() => render(e.target.value), 120);
    });
  }
  if (back) back.addEventListener('click', closeFrame);

  render('');
  cloakOff();
})();
