(function() {
    'use strict';

    window.VoidCompat = window.VoidCompat || {};

    var ua = navigator.userAgent;
    var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    var isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    var isWebKit = /AppleWebKit/.test(ua) && !/Chrome/.test(ua);
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    var isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;

    VoidCompat.device = {
        isIOS: isIOS,
        isSafari: isSafari,
        isWebKit: isWebKit,
        isMobile: isMobile,
        isStandalone: isStandalone,
        isIPad: /iPad/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1),
        isIPhone: /iPhone/.test(ua),
        isAndroid: /Android/.test(ua),
        iosVersion: (function() {
            var match = ua.match(/OS (\d+)_(\d+)_?(\d+)?/);
            return match ? parseFloat(match[1] + '.' + match[2]) : null;
        })(),
        safariVersion: (function() {
            var match = ua.match(/Version\/(\d+\.\d+)/);
            return match ? parseFloat(match[1]) : null;
        })()
    };

    VoidCompat.features = {
        serviceWorker: 'serviceWorker' in navigator,
        webSocket: 'WebSocket' in window,
        indexedDB: 'indexedDB' in window,
        localStorage: (function() {
            try {
                localStorage.setItem('test', 'test');
                localStorage.removeItem('test');
                return true;
            } catch (e) {
                return false;
            }
        })(),
        wasm: (function() {
            try {
                if (typeof WebAssembly === 'object' && typeof WebAssembly.instantiate === 'function') {
                    var module = new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0]));
                    return module instanceof WebAssembly.Module && new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
                }
            } catch (e) {}
            return false;
        })(),
        fetch: 'fetch' in window,
        promise: 'Promise' in window,
        broadcastChannel: 'BroadcastChannel' in window
    };

    VoidCompat.fixes = {
        applied: false,

        applyAll: function() {
            if (this.applied) return;
            this.applied = true;

            this.fixViewportHeight();
            this.fixServiceWorkerScope();
            this.fixWebSocketKeepalive();
            this.fixStorageQuota();
            this.fixScrollBehavior();
            this.fixInputZoom();
            this.fixTouchEvents();

            if (VoidCompat.device.isIOS) {
                this.fixIOSSpecific();
            }

            if (VoidCompat.device.isSafari) {
                this.fixSafariSpecific();
            }
        },

        fixViewportHeight: function() {
            var setVH = function() {
                var vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', vh + 'px');
                document.documentElement.style.setProperty('--real-vh', window.innerHeight + 'px');
            };

            setVH();
            window.addEventListener('resize', setVH);
            window.addEventListener('orientationchange', function() {
                setTimeout(setVH, 100);
            });
        },

        fixServiceWorkerScope: function() {
            if (!VoidCompat.features.serviceWorker) return;

            var originalRegister = navigator.serviceWorker.register.bind(navigator.serviceWorker);
            navigator.serviceWorker.register = function(scriptURL, options) {
                options = options || {};

                if (!options.scope) {
                    options.scope = '/';
                }

                return originalRegister(scriptURL, options).then(function(registration) {
                    if (VoidCompat.device.isIOS || VoidCompat.device.isSafari) {
                        registration.update().catch(function() {});
                    }
                    return registration;
                }).catch(function(error) {
                    console.warn('Service Worker registration failed:', error);
                    throw error;
                });
            };
        },

        fixWebSocketKeepalive: function() {
            if (!VoidCompat.features.webSocket) return;
            if (!VoidCompat.device.isIOS && !VoidCompat.device.isSafari) return;

            var OriginalWebSocket = window.WebSocket;
            window.WebSocket = function(url, protocols) {
                var ws = protocols ? new OriginalWebSocket(url, protocols) : new OriginalWebSocket(url);
                var pingInterval = null;

                ws.addEventListener('open', function() {
                    pingInterval = setInterval(function() {
                        if (ws.readyState === WebSocket.OPEN) {
                            try {
                                ws.send('');
                            } catch (e) {}
                        }
                    }, 25000);
                });

                var cleanup = function() {
                    if (pingInterval) {
                        clearInterval(pingInterval);
                        pingInterval = null;
                    }
                };

                ws.addEventListener('close', cleanup);
                ws.addEventListener('error', cleanup);

                return ws;
            };
            window.WebSocket.prototype = OriginalWebSocket.prototype;
            window.WebSocket.CONNECTING = OriginalWebSocket.CONNECTING;
            window.WebSocket.OPEN = OriginalWebSocket.OPEN;
            window.WebSocket.CLOSING = OriginalWebSocket.CLOSING;
            window.WebSocket.CLOSED = OriginalWebSocket.CLOSED;
        },

        fixStorageQuota: function() {
            if (!VoidCompat.device.isIOS && !VoidCompat.device.isSafari) return;

            if ('storage' in navigator && 'persist' in navigator.storage) {
                navigator.storage.persist().catch(function() {});
            }

            window.addEventListener('storage', function(e) {
                if (e.key === null) {
                    console.warn('Storage was cleared by the browser');
                }
            });
        },

        fixScrollBehavior: function() {
            if (!VoidCompat.device.isMobile) return;

            document.body.style.webkitOverflowScrolling = 'touch';
            document.body.style.overscrollBehavior = 'none';

            document.addEventListener('touchmove', function(e) {
                if (e.target.closest('iframe')) {
                    return;
                }
            }, { passive: true });
        },

        fixInputZoom: function() {
            if (!VoidCompat.device.isIOS) return;

            var inputs = document.querySelectorAll('input[type="text"], input[type="search"], input[type="email"], input[type="url"], textarea, select');
            inputs.forEach(function(input) {
                var computedStyle = window.getComputedStyle(input);
                var fontSize = parseFloat(computedStyle.fontSize);
                if (fontSize < 16) {
                    input.style.fontSize = '16px';
                }
            });

            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) {
                            var newInputs = node.querySelectorAll ? node.querySelectorAll('input[type="text"], input[type="search"], input[type="email"], input[type="url"], textarea, select') : [];
                            newInputs.forEach(function(input) {
                                var computedStyle = window.getComputedStyle(input);
                                var fontSize = parseFloat(computedStyle.fontSize);
                                if (fontSize < 16) {
                                    input.style.fontSize = '16px';
                                }
                            });
                        }
                    });
                });
            });

            observer.observe(document.body, { childList: true, subtree: true });
        },

        fixTouchEvents: function() {
            if (!VoidCompat.device.isMobile) return;

            document.addEventListener('touchstart', function() {}, { passive: true });

            var iframes = document.querySelectorAll('iframe');
            iframes.forEach(function(iframe) {
                iframe.setAttribute('scrolling', 'yes');
                iframe.style.webkitOverflowScrolling = 'touch';
            });
        },

        fixIOSSpecific: function() {
            if (VoidCompat.device.iosVersion && VoidCompat.device.iosVersion < 15) {
                var style = document.createElement('style');
                style.textContent = [
                    '.game-card, .app-card { -webkit-backdrop-filter: none !important; backdrop-filter: none !important; }',
                    'body { -webkit-overflow-scrolling: touch; }',
                    'iframe { -webkit-overflow-scrolling: touch; }'
                ].join('\n');
                document.head.appendChild(style);
            }

            document.addEventListener('gesturestart', function(e) {
                if (e.target.tagName !== 'IMG') {
                    e.preventDefault();
                }
            });

            var lastTouchEnd = 0;
            document.addEventListener('touchend', function(e) {
                var now = Date.now();
                if (now - lastTouchEnd <= 300) {
                    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
                        e.preventDefault();
                    }
                }
                lastTouchEnd = now;
            }, false);

            document.addEventListener('visibilitychange', function() {
                if (!document.hidden && navigator.serviceWorker && navigator.serviceWorker.controller) {
                    navigator.serviceWorker.controller.postMessage({ type: 'wake' });
                }
            });
        },

        fixSafariSpecific: function() {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then(function(registration) {
                    setInterval(function() {
                        registration.update().catch(function() {});
                    }, 60000);
                }).catch(function() {});
            }

            window.addEventListener('pageshow', function(event) {
                if (event.persisted) {
                    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
                        navigator.serviceWorker.controller.postMessage({ type: 'pageshow' });
                    }
                }
            });
        }
    };

    VoidCompat.proxy = {
        checkSupport: function() {
            var issues = [];

            if (!VoidCompat.features.serviceWorker) {
                issues.push('Service Workers not supported');
            }

            if (!VoidCompat.features.wasm) {
                issues.push('WebAssembly not supported');
            }

            if (!VoidCompat.features.webSocket) {
                issues.push('WebSocket not supported');
            }

            if (!VoidCompat.features.fetch) {
                issues.push('Fetch API not supported');
            }

            if (VoidCompat.device.isIOS && VoidCompat.device.iosVersion && VoidCompat.device.iosVersion < 14) {
                issues.push('iOS version too old (requires 14+)');
            }

            return {
                supported: issues.length === 0,
                issues: issues
            };
        },

        waitForServiceWorker: function(timeout) {
            timeout = timeout || 10000;

            return new Promise(function(resolve, reject) {
                if (!navigator.serviceWorker) {
                    reject(new Error('Service Workers not supported'));
                    return;
                }

                if (navigator.serviceWorker.controller) {
                    resolve(navigator.serviceWorker.controller);
                    return;
                }

                var timeoutId = setTimeout(function() {
                    reject(new Error('Service Worker activation timeout'));
                }, timeout);

                navigator.serviceWorker.ready.then(function(registration) {
                    clearTimeout(timeoutId);

                    if (registration.active) {
                        resolve(registration.active);
                    } else if (registration.installing || registration.waiting) {
                        var worker = registration.installing || registration.waiting;
                        worker.addEventListener('statechange', function() {
                            if (worker.state === 'activated') {
                                resolve(worker);
                            }
                        });
                    } else {
                        reject(new Error('No active service worker'));
                    }
                }).catch(reject);
            });
        },

        initWithRetry: function(initFn, maxRetries, delay) {
            maxRetries = maxRetries || 3;
            delay = delay || 1000;

            return new Promise(function(resolve, reject) {
                var attempts = 0;

                function attempt() {
                    attempts++;

                    initFn().then(resolve).catch(function(error) {
                        if (attempts < maxRetries) {
                            console.warn('Proxy init attempt ' + attempts + ' failed, retrying in ' + delay + 'ms');
                            setTimeout(attempt, delay);
                        } else {
                            reject(error);
                        }
                    });
                }

                attempt();
            });
        }
    };

    VoidCompat.ui = {
        getSafeAreaInsets: function() {
            var style = getComputedStyle(document.documentElement);
            return {
                top: parseInt(style.getPropertyValue('--safe-area-top') || '0', 10),
                bottom: parseInt(style.getPropertyValue('--safe-area-bottom') || '0', 10),
                left: parseInt(style.getPropertyValue('--safe-area-left') || '0', 10),
                right: parseInt(style.getPropertyValue('--safe-area-right') || '0', 10)
            };
        },

        getViewportHeight: function() {
            return window.innerHeight;
        },

        isKeyboardVisible: function() {
            if (!VoidCompat.device.isMobile) return false;

            var viewportHeight = window.innerHeight;
            var windowHeight = window.screen.height;

            return viewportHeight < windowHeight * 0.75;
        },

        onKeyboardChange: function(callback) {
            if (!VoidCompat.device.isMobile) return function() {};

            var lastHeight = window.innerHeight;

            var checkKeyboard = function() {
                var currentHeight = window.innerHeight;
                if (currentHeight !== lastHeight) {
                    var isVisible = currentHeight < lastHeight;
                    callback(isVisible, currentHeight);
                    lastHeight = currentHeight;
                }
            };

            window.addEventListener('resize', checkKeyboard);

            if (window.visualViewport) {
                window.visualViewport.addEventListener('resize', checkKeyboard);
            }

            return function() {
                window.removeEventListener('resize', checkKeyboard);
                if (window.visualViewport) {
                    window.visualViewport.removeEventListener('resize', checkKeyboard);
                }
            };
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            VoidCompat.fixes.applyAll();
        });
    } else {
        VoidCompat.fixes.applyAll();
    }

    window.VoidCompat = VoidCompat;

})();
