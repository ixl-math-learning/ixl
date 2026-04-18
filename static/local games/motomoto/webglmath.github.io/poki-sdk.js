(() => {
	var e = function(e) {
			var n = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
			return n && decodeURIComponent(n[1].replace(/\+/g, " "))
		},
		n = "kids" === e("tag"),
		t = new(function() {
			function e() {
				var e = this;
				this.queue = [], this.init = function(n) {
					return void 0 === n && (n = {}), new Promise((function(t, o) {
						e.enqueue("init", n, t, o)
					}))
				}, this.rewardedBreak = function() {
					return new Promise((function(e) {
						e(!1)
					}))
				}, this.noArguments = function(n) {
					return function() {
						e.enqueue(n)
					}
				}, this.oneArgument = function(n) {
					return function(t) {
						e.enqueue(n, t)
					}
				}, this.handleAutoResolvePromise = function() {
					return new Promise((function(e) {
						e()
					}))
				}, this.throwNotLoaded = function() {
					console.debug("PokiSDK is not loaded yet. Not all methods are available.")
				}
			}
			return e.prototype.enqueue = function(e, t, o, i) {
				var r = {
					fn: e,
					options: t,
					resolveFn: o,
					rejectFn: i
				};
				n ? i && i() : this.queue.push(r)
			}, e.prototype.dequeue = function() {
				for (var e = function() {
						var e = n.queue.shift(),
							t = e,
							o = t.fn,
							i = t.options;
						"function" == typeof window.PokiSDK[o] ? (null == e ? void 0 : e.resolveFn) || (null == e ? void 0 : e.rejectFn) ? window.PokiSDK[o](i).then((function() {
							for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
							"function" == typeof e.resolveFn && e.resolveFn.apply(e, n)
						})).catch((function() {
							for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
							"function" == typeof e.rejectFn && e.rejectFn.apply(e, n)
						})) : void 0 !== (null == e ? void 0 : e.fn) && window.PokiSDK[o](i) : console.error("Cannot execute " + e.fn)
					}, n = this; this.queue.length > 0;) e()
			}, e
		}());
	window.PokiSDK = {
		init: t.init,
		initWithVideoHB: t.init,
		customEvent: t.throwNotLoaded,
		commercialBreak: t.handleAutoResolvePromise,
		rewardedBreak: t.rewardedBreak,
		displayAd: t.throwNotLoaded,
		destroyAd: t.throwNotLoaded,
		getLeaderboard: t.handleAutoResolvePromise,
		getSharableURL: function() {
			return new Promise((function(e, n) {
				return n()
			}))
		},
		getURLParam: function(n) {
			return e("gd" + n) || e(n) || ""
		}
	}, ["disableProgrammatic", "gameLoadingStart", "gameLoadingFinished", "gameInteractive", "roundStart", "roundEnd", "muteAd"].forEach((function(e) {
		window.PokiSDK[e] = t.noArguments(e)
	})), ["setDebug", "gameplayStart", "gameplayStop", "gameLoadingProgress", "happyTime", "setPlayerAge", "togglePlayerAdvertisingConsent", "logError", "sendHighscore", "setDebugTouchOverlayController"].forEach((function(e) {
		window.PokiSDK[e] = t.oneArgument(e)
	}));
	var o, i = ((o = window.pokiSDKVersion) || (o = e("ab") || "v2.263.0"), "/poki-sdk-" + (n ? "kids" : "core") + "-" + o + ".js"),
		r = document.createElement("script");
	r.setAttribute("src", i), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous"), r.onload = function() {
		return t.dequeue()
	}, document.head.appendChild(r)
})();
/*
const API_ENDPOINT   = 'https://iframe-stat-api.bitlog.workers.dev/api/iframe-stat'; 
const FLUSH_INTERVAL = 20000;   
const MAX_BUFFER     = 10;      

const WHITELIST = [
'tbg95.github.io',
'bitlifeonline.github.io',
'eggy-car.github.io',
'slope-game.github.io',
'soccerlegends.github.io',
'trafficjam3d.github.io',
'penaltyshooters.gitlab.io',
'motox3m.gitlab.io',
];

const UID_KEY = 'tbg95-uid-iframe';
let uid = localStorage.getItem(UID_KEY);
if (!uid) {
uid = crypto.randomUUID();
localStorage.setItem(UID_KEY, uid);
}

const buffer = new Map();
let flushTimer;

const domainOf = url => {
try { return new URL(url).hostname; }
catch { return '(invalid)';        }
};
const isWhitelisted = host => WHITELIST.includes(host.toLowerCase());

function addHit(iframeUrl, parentHost) {
if (isWhitelisted(parentHost)) return;

if (!buffer.has(iframeUrl))
    buffer.set(iframeUrl, { hits: 0, parents: {} });

const rec = buffer.get(iframeUrl);
rec.hits += 1;
rec.parents[parentHost] = (rec.parents[parentHost] || 0) + 1;

const totalHits = [...buffer.values()].reduce((s, r) => s + r.hits, 0);
if (totalHits >= MAX_BUFFER) flushBuffer();
}

function flushBuffer() {
if (buffer.size === 0) return;

const payload = [...buffer.entries()].map(([iframeUrl, data]) => ({
    iframeUrl,
    hits   : data.hits,
    parents: data.parents
}));

if (navigator.sendBeacon) {
    navigator.sendBeacon(
    API_ENDPOINT,
    new Blob([JSON.stringify({
        uid, ts: Date.now(), data: payload
    })], { type: 'application/json' })
    );
} else {
    // Fallback to fetch
    fetch(API_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({
        uid, ts: Date.now(), data: payload
    }),
    headers: {
        'Content-Type': 'application/json'
    },
    // Use keepalive to mimic sendBeacon behavior
    keepalive: true
    }).catch(err => console.warn('Failed to send analytics:', err));
}

console.table(payload);    

buffer.clear();
clearTimeout(flushTimer);
flushTimer = setTimeout(flushBuffer, FLUSH_INTERVAL);
}

(function () {
const iframeUrl  = location.href;
const parentHost = domainOf(document.referrer || '(no-referrer)');

addHit(iframeUrl, parentHost);

flushTimer = setTimeout(flushBuffer, FLUSH_INTERVAL);
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushBuffer();
});
})();
*/