const swAllowedHostnames = ["localhost", "127.0.0.1"];

// Pre-warm the bare-mux SharedWorker as soon as this script executes, so the
// SharedWorker has time to boot before any setTransport call reaches it.
// Without this, bare-mux's hardcoded 1.5s ping timeout fires on cold start,
// spamming "Failed to get a ping response" warnings and delaying proxy init.
// The /~r/3/index.mjs epoxy bundle is primed into the HTTP cache via the
// <link rel="preload"> tag on pages that need it.
(function primeBareMux() {
  try {
    if (typeof BareMux !== 'undefined' && !window.__vnBareConn) {
      window.__vnBareConn = new BareMux.BareMuxConnection("/~r/2/worker.js");
    }
  } catch (e) {}
})();

async function ensureBareMuxLoaded() {
  if (typeof BareMux !== 'undefined') return;
  await new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "/~r/2/index.js";
    s.onload = resolve;
    s.onerror = () => reject(new Error("Failed to load BareMux"));
    document.head.appendChild(s);
  });
}

// Dedupe setTransport across concurrent callers on the same page. bare-mux's
// setTransport re-imports the 1.7MB epoxy bundle each call, so calling it
// multiple times from different init paths is expensive and races.
let _transportPromise = null;
async function setupBareMuxTransport() {
  if (_transportPromise) return _transportPromise;

  _transportPromise = (async () => {
    await ensureBareMuxLoaded();
    let connection = window.__vnBareConn;
    if (!connection) {
      connection = new BareMux.BareMuxConnection("/~r/2/worker.js");
      window.__vnBareConn = connection;
    }
    const wispUrl = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/~r/9/";
    await Promise.race([
      connection.setTransport("/~r/3/index.mjs", [{ wisp: wispUrl }]),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Transport timeout')), 10000))
    ]);
  })();

  _transportPromise.catch(() => { _transportPromise = null; });
  return _transportPromise;
}

async function registerSW() {
  if (location.protocol !== "https:" && !swAllowedHostnames.includes(location.hostname)) {
    throw new Error("Service workers cannot be registered without https.");
  }
  if (!navigator.serviceWorker) {
    throw new Error("Your browser doesn't support service workers.");
  }
  const transportPromise = setupBareMuxTransport();
  await navigator.serviceWorker.ready;
  await transportPromise;
}
