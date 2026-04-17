importScripts('/~r/7/bundle.js');
importScripts('/~r/7/config.js');
importScripts('/~r/1/scramjet.all.js');

class EventEmitter {
  constructor() {
    this._events = Object.create(null);
  }
  on(type, listener) {
    if (!this._events[type]) this._events[type] = [];
    this._events[type].push(listener);
    return this;
  }
  addListener(type, listener) {
    return this.on(type, listener);
  }
  off(type, listener) {
    const list = this._events[type];
    if (!list) return this;
    this._events[type] = list.filter((l) => l !== listener && l.listener !== listener);
    return this;
  }
  removeListener(type, listener) {
    return this.off(type, listener);
  }
  emit(type, ...args) {
    const list = this._events[type];
    if (!list || !list.length) return false;
    for (const fn of list.slice()) {
      try { fn.apply(this, args); } catch (e) {}
    }
    return true;
  }
}

class HookEvent {
  #intercepted = false;
  #returnValue = null;
  constructor(data = {}, target = null, that = null) {
    this.data = data;
    this.target = target;
    this.that = that;
  }
  get intercepted() { return this.#intercepted; }
  get returnValue() { return this.#returnValue; }
  respondWith(val) {
    this.#returnValue = val;
    this.#intercepted = true;
  }
}

class UVServiceWorker extends EventEmitter {
  constructor(config = self.__uv$config) {
    super();
    if (!config) throw new Error('Ultraviolet config not found');
    if (!config.bare) config.bare = '/~r/8/';
    this.config = config;
    this.addresses = typeof config.bare === 'string'
      ? [new URL(config.bare, location)]
      : config.bare.map((str) => new URL(str, location));
    this.headers = {
      csp: [
        'cross-origin-embedder-policy', 'cross-origin-opener-policy', 'cross-origin-resource-policy',
        'content-security-policy', 'content-security-policy-report-only', 'expect-ct', 'feature-policy',
        'origin-isolation', 'strict-transport-security', 'upgrade-insecure-requests',
        'x-content-type-options', 'x-download-options', 'x-frame-options',
        'x-permitted-cross-domain-policies', 'x-powered-by', 'x-xss-protection'
      ],
      forward: ['accept-encoding', 'content-length', 'connection']
    };
    this.method = { empty: ['GET', 'HEAD'] };
    this.statusCode = { empty: [204, 304] };
    this.browser = (self.navigator.userAgent || '').includes('Firefox') ? 'Firefox' : 'Chrome';
    if (this.browser === 'Firefox') {
      this.headers.forward.push('user-agent', 'content-type');
    }
  }

  get address() {
    return this.addresses[Math.floor(Math.random() * this.addresses.length)];
  }

  route({ request }) {
    return request.url.startsWith(location.origin + this.config.prefix);
  }

  async fetch({ request }) {
    if (!this.route({ request })) {
      return fetch(request);
    }
    try {
      const ultraviolet = new Ultraviolet(this.config);
      if (typeof this.config.construct === 'function') {
        this.config.construct(ultraviolet, 'service');
      }
      const db = await ultraviolet.cookie.db();
      ultraviolet.meta.origin = location.origin;
      ultraviolet.meta.base = ultraviolet.meta.url = new URL(ultraviolet.sourceUrl(request.url));

      const requestCtx = new RequestContext(
        request, this, ultraviolet,
        !this.method.empty.includes(request.method.toUpperCase()) ? await request.blob() : null
      );

      if (ultraviolet.meta.url.protocol === 'blob:') {
        requestCtx.blob = true;
        requestCtx.base = requestCtx.url = new URL(requestCtx.url.pathname);
      }

      if (request.referrer && request.referrer.startsWith(location.origin)) {
        const referer = new URL(ultraviolet.sourceUrl(request.referrer));
        if (requestCtx.headers.origin || (ultraviolet.meta.url.origin !== referer.origin && request.mode === 'cors')) {
          requestCtx.headers.origin = referer.origin;
        }
        requestCtx.headers.referer = referer.href;
      }

      const cookies = (await ultraviolet.cookie.getCookies(db)) || [];
      const cookieStr = ultraviolet.cookie.serialize(cookies, ultraviolet.meta, false);

      if (this.browser === 'Firefox' && !(request.destination === 'iframe' || request.destination === 'document')) {
        requestCtx.forward.shift();
      }
      if (cookieStr) requestCtx.headers.cookie = cookieStr;
      requestCtx.headers.Host = requestCtx.url.host;

      const reqEvent = new HookEvent(requestCtx, null, null);
      this.emit('request', reqEvent);
      if (reqEvent.intercepted) return reqEvent.returnValue;

      const response = await fetch(requestCtx.send);
      if (response.status === 500) return Promise.reject('');

      const responseCtx = new ResponseContext(requestCtx, response, this);

      const resEvent = new HookEvent(responseCtx, null, null);
      this.emit('beforemod', resEvent);
      if (resEvent.intercepted) return resEvent.returnValue;

      for (const name of this.headers.csp) {
        if (responseCtx.headers[name]) delete responseCtx.headers[name];
      }

      if (responseCtx.headers.location) {
        responseCtx.headers.location = ultraviolet.rewriteUrl(responseCtx.headers.location);
      }

      if (responseCtx.headers['set-cookie']) {
        Promise.resolve(ultraviolet.cookie.setCookies(responseCtx.headers['set-cookie'], db, ultraviolet.meta))
          .then(() => {
            self.clients.matchAll().then((clients) => {
              clients.forEach((client) => {
                client.postMessage({ msg: 'updateCookies', url: ultraviolet.meta.url.href });
              });
            });
          });
        delete responseCtx.headers['set-cookie'];
      }

      if (responseCtx.body) {
        switch (request.destination) {
          case 'script':
          case 'worker': {
            let rewritten = `if (!self.__uv && self.importScripts) importScripts('${this.config.bundle}', '${this.config.config}', '${this.config.handler}');\n`;
            rewritten += ultraviolet.js.rewrite(await response.text());
            responseCtx.body = rewritten;
            break;
          }
          case 'style':
            responseCtx.body = ultraviolet.rewriteCSS(await response.text());
            break;
          case 'iframe':
          case 'document':
            if (isHtml(ultraviolet.meta.url, responseCtx.headers['content-type'] || '')) {
              responseCtx.body = ultraviolet.rewriteHtml(await response.text(), {
                document: true,
                injectHead: ultraviolet.createHtmlInject(
                  this.config.handler, this.config.bundle, this.config.config,
                  ultraviolet.cookie.serialize(cookies, ultraviolet.meta, true),
                  request.referrer
                )
              });
            }
            break;
        }
      }

      if (requestCtx.headers.accept === 'text/event-stream') {
        responseCtx.headers['content-type'] = 'text/event-stream';
      }

      this.emit('response', resEvent);
      if (resEvent.intercepted) return resEvent.returnValue;

      return new Response(responseCtx.body, {
        headers: responseCtx.headers,
        status: responseCtx.status,
        statusText: responseCtx.statusText
      });
    } catch (err) {
      return new Response(err.toString(), { status: 500 });
    }
  }

  getBarerResponse(response) {
    const headers = {};
    const raw = JSON.parse(response.headers.get('x-bare-headers'));
    for (const key in raw) headers[key.toLowerCase()] = raw[key];
    return {
      headers,
      status: +response.headers.get('x-bare-status'),
      statusText: response.headers.get('x-bare-status-text'),
      body: !this.statusCode.empty.includes(+response.headers.get('x-bare-status')) ? response.body : null
    };
  }
}

class ResponseContext {
  constructor(request, response, worker) {
    const base = !request.blob
      ? worker.getBarerResponse(response)
      : { status: response.status, statusText: response.statusText, headers: Object.fromEntries(response.headers.entries()), body: response.body };
    this.request = request;
    this.raw = response;
    this.ultraviolet = request.ultraviolet;
    this.headers = base.headers;
    this.status = base.status;
    this.statusText = base.statusText;
    this.body = base.body;
  }
  get url() { return this.request.url; }
  get base() { return this.request.base; }
  set base(val) { this.request.base = val; }
}

class RequestContext {
  constructor(request, worker, ultraviolet, body = null) {
    this.ultraviolet = ultraviolet;
    this.request = request;
    this.headers = Object.fromEntries(request.headers.entries());
    this.method = request.method;
    this.forward = [...worker.headers.forward];
    this.address = worker.address;
    this.body = body || null;
    this.redirect = request.redirect;
    this.credentials = 'omit';
    this.mode = request.mode === 'cors' ? request.mode : 'same-origin';
    this.blob = false;
  }
  get url() { return this.ultraviolet.meta.url; }
  set url(val) { this.ultraviolet.meta.url = val; }
  get base() { return this.ultraviolet.meta.base; }
  set base(val) { this.ultraviolet.meta.base = val; }
  get send() {
    const targetUrl = !this.blob
      ? this.address.href + 'v1/'
      : 'blob:' + location.origin + this.url.pathname;
    return new Request(targetUrl, {
      method: this.method,
      headers: {
        'x-bare-protocol': this.url.protocol,
        'x-bare-host': this.url.hostname,
        'x-bare-path': this.url.pathname + this.url.search,
        'x-bare-port': this.url.port || (this.url.protocol === 'https:' ? '443' : '80'),
        'x-bare-headers': JSON.stringify(this.headers),
        'x-bare-forward-headers': JSON.stringify(this.forward)
      },
      redirect: this.redirect,
      credentials: this.credentials,
      mode: location.origin !== this.address.origin ? 'cors' : this.mode,
      body: this.body
    });
  }
}

function isHtml(url, contentType = '') {
  const headerType = (contentType || '').split(';')[0].trim();
  if (headerType) return headerType === 'text/html' || headerType === 'application/xhtml+xml';
  return /\.html?($|\?)/i.test(url.pathname || '');
}

const uv = new UVServiceWorker();

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

let configLoaded = false;
let blockedPageCache = null;

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
});

async function handleRequest(event) {
    try {
        if (!configLoaded) {
            await scramjet.loadConfig();
            configLoaded = true;
        }
    } catch (e) {
        configLoaded = false;
    }

    try {
        if (scramjet.route(event)) {
            const targetUrl = extractUrlFromScramjet(event.request);
            if (targetUrl && isBlockedHostname(targetUrl.hostname)) {
                return new Response(await getBlockedPage(), { status: 200, headers: { 'Content-Type': 'text/html' } });
            }
            return await scramjet.fetch(event);
        }

        if (uv.route(event)) {
            return await uv.fetch(event);
        }
    } catch (e) {
        console.error('Proxy error:', e);
        return new Response('Connection error - please refresh', { status: 503 });
    }

    return fetch(event.request);
}

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => event.respondWith(handleRequest(event)));
