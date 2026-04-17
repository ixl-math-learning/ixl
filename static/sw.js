// Save native fetch before BareMux patches it — used as fallback when transport fails
const __nativeFetch = self.fetch.bind(self);

importScripts('/~r/6/uv.bundle.js', '/~r/7/config.js', '/~r/6/uv.sw.js', '/~r/1/scramjet.all.js');

const uv = new UVServiceWorker();

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

let configLoaded = false;
let configAttempted = false;
let configPromise = null;
let blockedPageCache = null;

const RETRY_PAGE = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Retrying...</title><style>*{margin:0;padding:0;box-sizing:border-box}body{background:#0a0a0a;color:#fff;font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh}.c{text-align:center}.s{width:36px;height:36px;border:3px solid rgba(255,255,255,0.1);border-top-color:rgba(255,255,255,0.7);border-radius:50%;animation:r .8s linear infinite;margin:0 auto 16px}@keyframes r{to{transform:rotate(360deg)}}p{color:rgba(255,255,255,0.5);font-size:14px;margin:4px 0}button{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#fff;padding:8px 20px;border-radius:8px;cursor:pointer;font-size:13px;margin-top:16px}button:hover{background:rgba(255,255,255,0.12)}</style></head><body><div class="c"><div class="s"></div><p>Proxy connection lost</p><p style="font-size:12px">Retrying automatically...</p><button onclick="sessionStorage.removeItem('_pr');location.reload()">Retry Now</button></div><script>try{var k='_pr',r=+sessionStorage.getItem(k)||0;if(r<2){sessionStorage.setItem(k,r+1);setTimeout(function(){location.reload()},2500)}else{sessionStorage.removeItem(k);document.querySelector('.s').style.display='none';document.querySelectorAll('p')[0].textContent='Connection failed';document.querySelectorAll('p')[1].textContent='Try refreshing the page'}}catch(e){setTimeout(function(){location.reload()},3000)}</script></body></html>`;


const SCRAMJET_CACHE = 'scramjet-v1';

const CACHEABLE_TYPES = /javascript|css|image\/|font\/|wasm|audio\/|video\/|octet-stream/i;

const BLOCKED_DOMAINS = [
    'pornhub', 'xvideos', 'xnxx', 'xhamster', 'redtube', 'youporn',
    'brazzers', 'bangbros', 'realitykings', 'naughtyamerica',
    'chaturbate', 'stripchat', 'livejasmin', 'bongacams', 'myfreecams',
    'onlyfans', 'fansly', 'nhentai', 'hentaihaven', 'rule34', 'e621',
    'spankbang', 'tube8', 'xtube', 'motherless', 'tnaflix',
    'porntube', 'thumbzilla', 'porntrex', 'eporner', 'txxx', 'hqporner',
    'xxx', 'porn', 'sex.com', 'spankwire', 'keezmovies', 'extremetube',
    'mofos', 'babes.com', 'twistys', 'digitalplayground', 'wicked.com',
    'adulttime', 'blacked', 'tushy', 'vixen', 'deeper', 'slayed', 'milfy', 'analonly'
];

const domainRegex = new RegExp(BLOCKED_DOMAINS.join('|'), 'i');

async function getBlockedPage() {
    if (blockedPageCache) return blockedPageCache;
    try {
        const response = await fetch('/blocked.html');
        if (response.ok) {
            blockedPageCache = await response.text();
            return blockedPageCache;
        }
    } catch {}
    return '<html><body><h1>Blocked</h1></body></html>';
}

function isBlockedHostname(hostname) {
    if (!hostname) return false;
    return domainRegex.test(hostname);
}

function extractUrlFromScramjet(request) {
    const prefix = (scramjet.config && scramjet.config.prefix) ? scramjet.config.prefix : '/~r/p/';
    try {
        const url = new URL(request.url);
        if (url.pathname.startsWith(prefix)) {
            const encodedPart = url.pathname.slice(prefix.length);
            const firstSegment = encodedPart.split('/')[0];
            return new URL(decodeURIComponent(firstSegment));
        }
    } catch {}
    return null;
}

scramjet.addEventListener('request', (event) => {
    delete event.requestHeaders['sec-fetch-site'];
    delete event.requestHeaders['sec-fetch-mode'];
    delete event.requestHeaders['sec-fetch-dest'];
    delete event.requestHeaders['sec-fetch-user'];

    // YouTube/Google: spoof UA for basic codecs + add consent cookie
    const reqUrl = event.url ? new URL(event.url) : null;
    const host = reqUrl ? reqUrl.hostname : '';
    if (host.includes('youtube.com') || host.includes('googlevideo.com') ||
        host.includes('ytimg.com') || host.includes('google.com')) {
        event.requestHeaders['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
        const existing = event.requestHeaders['cookie'] || '';
        if (!existing.includes('SOCS=')) {
            const consent = 'SOCS=CAISNQgDEitib3FfaWRlbnRpdHlmcm9udGVuZHVpc2VydmVyXzIwMjMwODI5LjA3X3AxGgJlbiADGgYIgMLsBhACGgYIgMLsBhAC';
            event.requestHeaders['cookie'] = existing ? existing + '; ' + consent : consent;
        }
        if (!event.requestHeaders['accept-language']) {
            event.requestHeaders['accept-language'] = 'en-US,en;q=0.9';
        }
    }
});

async function handleRequest(event) {

    // Check UV route FIRST — UV requests don't need scramjet config
    try {
        if (uv.route(event)) {
            for (let _attempt = 0; _attempt < 2; _attempt++) {
                try {
                    return await Promise.race([
                        uv.fetch(event),
                        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 15000))
                    ]);
                } catch (fetchErr) {
                    if (_attempt === 0) {
                        await new Promise(r => setTimeout(r, 2000));
                        continue;
                    }
                    const patchedFetch = self.fetch;
                    self.fetch = __nativeFetch;
                    try {
                        return await uv.fetch(event);
                    } catch (retryErr) {
                        console.error('UV fetch failed (transport + native):', retryErr);
                        const dest = event.request.destination;
                        if (dest === 'document' || dest === 'iframe') {
                            return new Response(RETRY_PAGE, { status: 200, headers: { 'Content-Type': 'text/html' } });
                        }
                        return new Response('', { status: 502 });
                    } finally {
                        self.fetch = patchedFetch;
                    }
                }
            }
        }
    } catch (e) {
        console.error('UV error:', e);
        const dest = event.request.destination;
        if (dest === 'document' || dest === 'iframe') {
            return new Response(RETRY_PAGE, { status: 200, headers: { 'Content-Type': 'text/html' } });
        }
    }

    // Scramjet config only needed for scramjet routes — load lazily
    if (!configLoaded && !configAttempted) {
        if (!configPromise) {
            configPromise = Promise.race([
                scramjet.loadConfig(),
                new Promise((_, reject) => setTimeout(() => reject(new Error('Config timeout')), 5000))
            ]).then(() => {
                configLoaded = true;
                configAttempted = true;
            }).catch(() => {
                configAttempted = true;
            });
        }
        await configPromise;
    }


    try {
        if (scramjet.route(event)) {
            const targetUrl = extractUrlFromScramjet(event.request);
            if (targetUrl && isBlockedHostname(targetUrl.hostname)) {
                return new Response(await getBlockedPage(), { status: 200, headers: { 'Content-Type': 'text/html' } });
            }


            const cache = await caches.open(SCRAMJET_CACHE).catch(() => null);
            if (cache) {
                const cached = await cache.match(event.request).catch(() => null);
                if (cached) return cached;
            }

            let response;
            try {
                response = await scramjet.fetch(event);
            } catch (fetchErr) {
                console.error('Scramjet fetch error:', fetchErr);
                // Signal all clients to re-establish transport (MuxTaskEnded = dead WebSocket)
                const isTransportDead = fetchErr && (
                    String(fetchErr).includes('MuxTaskEnded') ||
                    String(fetchErr).includes('Wisp') ||
                    String(fetchErr).includes('client error')
                );
                if (isTransportDead) {
                    self.clients.matchAll().then(clients => {
                        clients.forEach(c => c.postMessage({ type: 'transport-reconnect' }));
                    }).catch(() => {});
                }
                const dest = event.request.destination;
                if (dest === 'document' || dest === 'iframe') {
                    return new Response(RETRY_PAGE, { status: 200, headers: { 'Content-Type': 'text/html' } });
                }
                return new Response('', { status: 502 });
            }


            if (cache && response && response.ok) {
                const ct = response.headers.get('content-type') || '';
                if (CACHEABLE_TYPES.test(ct)) {
                    cache.put(event.request, response.clone()).catch(() => {});
                }
            }

            return response;
        }
    } catch (e) {
        console.error('Scramjet error:', e);
        const dest = event.request.destination;
        if (dest === 'document' || dest === 'iframe') {
            return new Response(RETRY_PAGE, { status: 200, headers: { 'Content-Type': 'text/html' } });
        }
    }


    return fetch(event.request).catch(() => new Response('Network error', { status: 502, headers: { 'Content-Type': 'text/plain' } }));
}

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(
    Promise.all([
        self.clients.claim(),

        self.registration.navigationPreload && self.registration.navigationPreload.enable(),

        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k.startsWith('scramjet-') && k !== SCRAMJET_CACHE).map(k => caches.delete(k)))
        )
    ])
));
self.addEventListener('fetch', (event) => {


    try {
        const url = new URL(event.request.url);
        if (url.origin === self.location.origin) {
            const path = url.pathname;
            if (!path.startsWith('/~r/p/') && !path.startsWith('/~/uv/') && !path.startsWith('/~/px/')) {
                // Block direct browser navigation to JS files
                if (event.request.mode === 'navigate' && path.endsWith('.js')) {
                    event.respondWith(new Response('curiosity killed the cat. close the tab.', {
                        status: 200,
                        headers: { 'Content-Type': 'text/plain' }
                    }));
                    return;
                }

                if (event.request.mode === 'navigate' && event.preloadResponse) {
                    event.respondWith(event.preloadResponse.then(r => r || fetch(event.request)));
                }
                return;
            }
        }
    } catch (e) {
        // If URL parsing fails, don't intercept - let browser handle it
        return;
    }


    event.respondWith(handleRequest(event).catch(() => new Response('Service worker error', { status: 502, headers: { 'Content-Type': 'text/plain' } })));
});
