(function() {
    var disableAnimations = localStorage.getItem('disableGameAnimations') === 'true';

    // Server selection modal - styles
    var ssStyle = document.createElement('style');
    ssStyle.textContent =
        '.server-select-overlay{display:flex;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:10000;justify-content:center;align-items:center;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);opacity:0;visibility:hidden;transition:opacity .25s ease,visibility .25s ease}' +
        '.server-select-overlay.visible{opacity:1;visibility:visible}' +
        '.server-select-modal{background:rgba(20,20,20,0.95);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:2rem;max-width:480px;width:90%;text-align:center;position:relative;box-shadow:0 20px 60px rgba(0,0,0,0.5);transform:scale(.95) translateY(10px);transition:transform .25s ease;font-family:Poppins,sans-serif}' +
        '.server-select-overlay.visible .server-select-modal{transform:scale(1) translateY(0)}' +
        '.server-select-close{position:absolute;top:12px;right:16px;background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:4px 8px;transition:color .2s;font-family:inherit}' +
        '.server-select-close:hover{color:#fff}' +
        '.server-select-title{font-size:1.4rem;font-weight:700;color:#f5f5f5;margin:0 0 .3rem}' +
        '.server-select-subtitle{font-size:.9rem;color:rgba(245,245,245,0.5);margin:0 0 1.5rem}' +
        '.server-select-buttons{display:flex;flex-direction:column;gap:1rem}' +
        '.server-btn{background:rgba(30,30,30,0.8);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:1.2rem;cursor:pointer;text-align:left;transition:all .3s ease;display:flex;flex-direction:column;gap:.4rem;font-family:inherit}' +
        '.server-btn:hover{background:rgba(40,40,40,0.9);border-color:rgba(255,255,255,0.15);transform:translateY(-2px);box-shadow:0 8px 25px rgba(0,0,0,0.3)}' +
        '.server-btn-header{display:flex;align-items:center;gap:.6rem}' +
        '.server-name{font-size:1.1rem;font-weight:600;color:#f5f5f5}' +
        '.server-desc{font-size:.8rem;color:rgba(245,245,245,0.45);line-height:1.4}' +
        '.recommended-badge{display:none;background:rgba(76,175,80,0.2);color:#4caf50;font-size:.7rem;font-weight:600;padding:2px 8px;border-radius:8px;border:1px solid rgba(76,175,80,0.3)}';
    document.head.appendChild(ssStyle);

    // Server selection modal - DOM
    var ssOverlay = document.createElement('div');
    ssOverlay.className = 'server-select-overlay';
    ssOverlay.innerHTML =
        '<div class="server-select-modal">' +
            '<button class="server-select-close">&times;</button>' +
            '<h2 class="server-select-title"></h2>' +
            '<p class="server-select-subtitle">Choose a server</p>' +
            '<div class="server-select-buttons">' +
                '<button class="server-btn" data-server="1">' +
                    '<div class="server-btn-header"><span class="server-name">Server 1</span><span class="recommended-badge">Recommended</span></div>' +
                    '<span class="server-desc">A bit slower but less laggy after load</span>' +
                '</button>' +
                '<button class="server-btn" data-server="2">' +
                    '<div class="server-btn-header"><span class="server-name">Server 2</span><span class="recommended-badge">Recommended</span></div>' +
                    '<span class="server-desc">Can be a bit laggy for slower devices, but extremely fast loading and very compatible</span>' +
                '</button>' +
            '</div>' +
        '</div>';
    document.body.appendChild(ssOverlay);

    ssOverlay.addEventListener('click', function(e) {
        if (e.target === ssOverlay) ssOverlay.classList.remove('visible');
    });
    ssOverlay.querySelector('.server-select-close').addEventListener('click', function() {
        ssOverlay.classList.remove('visible');
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') ssOverlay.classList.remove('visible');
    });

    window.VoidGameLoader = {
        ratingsData: null,
        ratingsLoaded: false,
        ratingsPromise: null,
        playCountData: null,
        playCountPromise: null,

        init: function() {
            this.loadRatings();
            this.loadPlayCounts();
        },

        loadRatings: function() {
            var self = this;
            if (this.ratingsPromise) return this.ratingsPromise;

            // Check sessionStorage cache first (60s TTL)
            try {
                var cached = sessionStorage.getItem('vn_ratings');
                if (cached) {
                    var parsed = JSON.parse(cached);
                    if (parsed.ts && (Date.now() - parsed.ts) < 60000) {
                        self.ratingsData = parsed.data;
                        self.ratingsLoaded = true;
                        self.ratingsPromise = Promise.resolve(self.ratingsData);
                        return self.ratingsPromise;
                    }
                }
            } catch(e) {}

            this.ratingsPromise = fetch('/api/game-ratings')
            .then(function(response) {
                if (!response.ok) throw new Error('Failed to load ratings');
                return response.json();
            })
            .then(function(data) {
                if (data.success && data.ratings) {
                    self.ratingsData = data.ratings;
                } else {
                    self.ratingsData = {};
                }
                self.ratingsLoaded = true;
                // Cache in sessionStorage
                try {
                    sessionStorage.setItem('vn_ratings', JSON.stringify({ ts: Date.now(), data: self.ratingsData }));
                } catch(e) {}
                return self.ratingsData;
            })
            .catch(function(err) {
                console.error('Ratings load error:', err);
                self.ratingsData = {};
                self.ratingsLoaded = true;
                return self.ratingsData;
            });

            return this.ratingsPromise;
        },

        waitForRatings: function(timeout) {
            var self = this;
            timeout = timeout || 3000;

            if (this.ratingsLoaded) {
                return Promise.resolve(this.ratingsData);
            }


            if (this.ratingsPromise) {
                var timeoutPromise = new Promise(function(resolve) {
                    setTimeout(function() {
                        self.ratingsData = self.ratingsData || {};
                        self.ratingsLoaded = true;
                        resolve(self.ratingsData);
                    }, timeout);
                });
                return Promise.race([this.ratingsPromise, timeoutPromise]);
            }


            return this.loadRatings();
        },

        refreshRatings: function() {
            this.ratingsPromise = null;
            this.ratingsLoaded = false;
            this.ratingsData = null;
            return this.loadRatings();
        },

        loadPlayCounts: function() {
            var self = this;
            if (this.playCountPromise) return this.playCountPromise;
            try {
                var cached = sessionStorage.getItem('vn_playCounts');
                if (cached) {
                    var parsed = JSON.parse(cached);
                    if (parsed.ts && (Date.now() - parsed.ts) < 60000) {
                        self.playCountData = parsed.data;
                        self.playCountPromise = Promise.resolve(self.playCountData);
                        return self.playCountPromise;
                    }
                }
            } catch(e) {}
            this.playCountPromise = fetch('/api/game-play-counts')
                .then(function(r) { return r.ok ? r.json() : {}; })
                .then(function(data) {
                    self.playCountData = data || {};
                    try { sessionStorage.setItem('vn_playCounts', JSON.stringify({ ts: Date.now(), data: self.playCountData })); } catch(e) {}
                    return self.playCountData;
                })
                .catch(function() { self.playCountData = {}; return {}; });
            return this.playCountPromise;
        },

        getPlayCount: function(gameTitle) {
            if (!this.playCountData) return 0;
            return this.playCountData[gameTitle] || 0;
        },

        formatCount: function(n) {
            if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
            if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
            return String(n);
        },

        getRating: function(gameTitle) {
            if (!this.ratingsData) return { likes: 0, dislikes: 0 };
            return this.ratingsData[gameTitle] || { likes: 0, dislikes: 0 };
        },

        sortGamesByRating: function(games) {
            var self = this;
            return games.slice().sort(function(a, b) {
                var ratingA = self.getRating(a.title);
                var ratingB = self.getRating(b.title);
                var scoreA = (ratingA.likes || 0) - (ratingA.dislikes || 0);
                var scoreB = (ratingB.likes || 0) - (ratingB.dislikes || 0);
                if (scoreB !== scoreA) {
                    return scoreB - scoreA;
                }
                return (ratingB.likes || 0) - (ratingA.likes || 0);
            });
        },

        getProxyType: function(link) {
            if (typeof link !== 'string' || !link) return null;
            // Explicitly exclude local paths
            if (link.startsWith('/reading/')) return null;
            if (link.startsWith('/local games/') || link.startsWith('/local%20games/')) return null;
            if (link.startsWith('/documents/')) return null;
            // Proxy types
            if (link.startsWith('__SCRAMJET__')) return 'scramjet';
            if (link.startsWith('/onlylocal/html/')) return 'onlylocal';
            if (link.startsWith('/onlylocal/')) return null;
            if (typeof __uv$config !== 'undefined' && typeof __uv$config.prefix === 'string' && __uv$config.prefix.length > 1 && link.startsWith(__uv$config.prefix)) return 'uv';
            return null;
        },

        getRawUrl: function(link, proxyType) {
            try {
                if (proxyType === 'scramjet') return link.substring('__SCRAMJET__'.length);
                if (proxyType === 'uv') return __uv$config.decodeUrl(link.substring(__uv$config.prefix.length));
            } catch(e) {}
            return null;
        },

        buildProxyLink: function(rawUrl, server) {
            if (server === 1) return __uv$config.prefix + __uv$config.encodeUrl(rawUrl);
            if (server === 2) return '__SCRAMJET__' + rawUrl;
            return null;
        },

        showServerSelect: function(game) {
            var self = this;
            var proxyType = this.getProxyType(game.link);
            var isOnlyLocal = proxyType === 'onlylocal';

            ssOverlay.querySelector('.server-select-title').textContent = game.title;

            var descs = ssOverlay.querySelectorAll('.server-desc');
            var badges = ssOverlay.querySelectorAll('.recommended-badge');
            var btns = ssOverlay.querySelectorAll('.server-btn');

            if (isOnlyLocal) {
                descs[0].textContent = 'May be a bit slower, but it will work on all schools, and it won\'t show any errors';
                descs[1].textContent = 'Extremely fast, and no lag, but may be blocked by your school causing the game to not load properly';
                badges[0].style.display = 'none';
                badges[1].style.display = 'none';

                btns[0].onclick = function() {
                    ssOverlay.classList.remove('visible');
                    window.location.href = '/view.html?game=' + encodeURIComponent(game.link) + '&title=' + btoa(game.title);
                };
                btns[1].onclick = function() {
                    ssOverlay.classList.remove('visible');
                    var directLink = game.link.replace('/onlylocal/html/', '/onlylocal/html-direct/');
                    window.location.href = '/view.html?game=' + encodeURIComponent(directLink) + '&title=' + btoa(game.title);
                };
            } else {
                descs[0].textContent = 'A bit slower but less laggy after load';
                descs[1].textContent = 'Can be a bit laggy for slower devices, but extremely fast loading and very compatible';
                badges[0].style.display = proxyType === 'uv' ? 'inline-block' : 'none';
                badges[1].style.display = proxyType === 'scramjet' ? 'inline-block' : 'none';

                var rawUrl = this.getRawUrl(game.link, proxyType);
                if (!rawUrl) {
                    window.location.href = '/view.html?game=' + encodeURIComponent(game.link) + '&title=' + btoa(game.title);
                    return;
                }

                btns[0].onclick = function() {
                    ssOverlay.classList.remove('visible');
                    var finalLink = self.buildProxyLink(rawUrl, 1);
                    window.location.href = '/view.html?game=' + encodeURIComponent(finalLink) + '&title=' + btoa(game.title);
                };
                btns[1].onclick = function() {
                    ssOverlay.classList.remove('visible');
                    var finalLink = self.buildProxyLink(rawUrl, 2);
                    window.location.href = '/view.html?game=' + encodeURIComponent(finalLink) + '&title=' + btoa(game.title);
                };
            }

            ssOverlay.classList.add('visible');
        },

        createGameCard: function(game, index) {
            var self = this;
            var card = document.createElement('div');
            card.className = 'game-card';
            card.dataset.link = game.link;
            card.dataset.title = game.title;

            if (disableAnimations) {
                card.style.opacity = '1';
                card.style.transform = 'none';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
            }

            var img = document.createElement('img');
            img.className = 'game-image';
            img.alt = game.title;
            img.loading = 'lazy';
            img.decoding = 'async';
            img.dataset.src = game.imgSrc;
            img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3Crect fill="%23111" width="1" height="1"/%3E%3C/svg%3E';
            img.onerror = function() { this.src = '/img/gameimg/placeholder.png'; };

            var info = document.createElement('div');
            info.className = 'game-info';

            var titleEl = document.createElement('h3');
            titleEl.className = 'game-title';
            titleEl.textContent = game.title;
            info.appendChild(titleEl);

            var rating = this.getRating(game.title);
            var ratingDisplay = document.createElement('div');
            ratingDisplay.className = 'game-rating-display';
            ratingDisplay.innerHTML = '<div class="rating-item rating-likes"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg><span>' + (rating.likes || 0) + '</span></div><div class="rating-item rating-dislikes"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg><span>' + (rating.dislikes || 0) + '</span></div>';
            info.appendChild(ratingDisplay);

            var playCount = this.getPlayCount(game.title);
            if (playCount > 0) {
                var countBadge = document.createElement('div');
                countBadge.className = 'game-play-count';
                countBadge.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>' + this.formatCount(playCount);
                card.appendChild(countBadge);
            }

            card.appendChild(img);
            card.appendChild(info);

            card.addEventListener('click', function() {
                var proxyType = window.VoidGameLoader.getProxyType(game.link);
                if (proxyType) {
                    window.VoidGameLoader.showServerSelect(game);
                    return;
                }
                var encodedTitle = btoa(game.title);
                var isLocalGame = game.link.startsWith('/reading/');
                if (isLocalGame) {
                    var queryString = 'game=' + encodeURIComponent(game.link) + '&title=' + encodedTitle;
                    var encodedQuery = btoa(queryString).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
                    window.location.href = '/view.html?' + encodedQuery;
                } else {
                    window.location.href = '/view.html?game=' + encodeURIComponent(game.link) + '&title=' + encodedTitle;
                }
            });

            return card;
        },

        renderGames: function(games, container, startIndex) {
            startIndex = startIndex || 0;
            var fragment = document.createDocumentFragment();

            games.forEach(function(game, i) {
                var card = window.VoidGameLoader.createGameCard(game, startIndex + i);
                fragment.appendChild(card);
            });

            container.appendChild(fragment);

            if (!disableAnimations) {
                requestAnimationFrame(function() {
                    var cards = container.querySelectorAll('.game-card');
                    cards.forEach(function(card, i) {
                        if (card.style.opacity === '0') {
                            setTimeout(function() {
                                card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, Math.min(i * 30, 500));
                        }
                    });
                });
            }

            window.VoidGameLoader.lazyLoadImages();
        },

        imageObserver: null,

        initImageObserver: function() {
            if (this.imageObserver) return;
            if (!('IntersectionObserver' in window)) return;

            this.imageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            window.VoidGameLoader.imageObserver.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '300px 0px',
                threshold: 0.01
            });
        },

        lazyLoadImages: function() {
            this.initImageObserver();

            if (this.imageObserver) {
                document.querySelectorAll('img[data-src]').forEach(function(img) {
                    window.VoidGameLoader.imageObserver.observe(img);
                });
            } else {
                document.querySelectorAll('img[data-src]').forEach(function(img) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                });
            }
        }
    };

    window.VoidGameLoader.init();
})();
