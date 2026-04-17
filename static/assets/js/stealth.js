(function() {
    'use strict';

    var STEALTH_KEY = 'voidStealth';

    function getConfig() {
        try {
            return JSON.parse(localStorage.getItem(STEALTH_KEY)) || {};
        } catch (e) { return {}; }
    }

    function saveConfig(cfg) {
        localStorage.setItem(STEALTH_KEY, JSON.stringify(cfg));
    }

    var cfg = getConfig();

    // ═══════════════════════════════════════
    // 1. Auto-Hide on Tab Switch (blur/focus)
    //    Beats ALL screenshot monitors
    // ═══════════════════════════════════════
    if (cfg.autoHide) {
        var originalTitle = document.title;
        var originalFavicon = '';
        var linkEl = document.querySelector("link[rel~='icon']");
        if (linkEl) originalFavicon = linkEl.href;

        var hideOverlay = null;

        // Pre-render fake school page HTML
        var fakePageHtml = '<div style="text-align:center;font-family:\'Google Sans\',Roboto,Arial,sans-serif;color:#3c4043;max-width:600px;padding:20px;">' +
            '<img src="https://ssl.gstatic.com/classroom/favicon.png" style="width:48px;height:48px;margin-bottom:16px;" alt="">' +
            '<h1 style="font-size:1.375rem;font-weight:400;margin-bottom:8px;color:#202124;">Google Classroom</h1>' +
            '<p style="color:#5f6368;font-size:0.875rem;">Loading your classes...</p>' +
            '<div style="width:200px;height:4px;background:#e8eaed;border-radius:2px;margin:20px auto;overflow:hidden;">' +
            '<div style="width:40%;height:100%;background:#1a73e8;border-radius:2px;animation:gcLoad 1.5s ease infinite;"></div></div></div>';

        function createHideOverlay() {
            if (hideOverlay) return;
            hideOverlay = document.createElement('div');
            hideOverlay.style.cssText = 'position:fixed;inset:0;z-index:999999;background:#fff;display:flex;align-items:center;justify-content:center;';

            var style = document.createElement('style');
            style.textContent = '@keyframes gcLoad{0%{margin-left:0}50%{margin-left:60%}100%{margin-left:0}}';
            hideOverlay.appendChild(style);

            var content = document.createElement('div');
            content.innerHTML = fakePageHtml;
            hideOverlay.appendChild(content);
            document.body.appendChild(hideOverlay);
        }

        function removeHideOverlay() {
            if (hideOverlay && hideOverlay.parentNode) {
                hideOverlay.parentNode.removeChild(hideOverlay);
                hideOverlay = null;
            }
        }

        function restoreTab() {
            var maskEnabled = localStorage.getItem('tabMaskEnabled') === 'true';
            if (maskEnabled && window.VoidSettings && window.VoidSettings.applyTabMask) {
                var maskType = localStorage.getItem('tabMaskType');
                if (maskType) {
                    window.VoidSettings.applyTabMask(maskType, localStorage.getItem('customTabTitle'), localStorage.getItem('customTabFavicon'));
                    return;
                }
            }
            // No mask selected — restore to default tab (Not Found + Google Forms favicon)
            document.title = 'Not Found';
            var link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = 'https://lh7-rt.googleusercontent.com/formsz/AN7BsVDxUhMdM60YDd-DUWlRT3hcYIiAisx3L2uSQuXCcJe6o8wDZuKLLe6_u6rdAhXsZcVLCqcinbroAREncoyWF1zW4GooDPTXg7EChDrE2l1NFsMe7fUdtqcHSPFCXlZF5ZgLCjqeic3bzjdk9NeQZib8RxomY4qchrRkBg?key=yj4V8pHW144VjA9YlEbf1Q';
        }

        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                createHideOverlay();
                document.title = cfg.autoHideTitle || 'Google Classroom';
                var link = document.querySelector("link[rel~='icon']");
                if (link) link.href = 'https://ssl.gstatic.com/classroom/favicon.png';
            } else {
                removeHideOverlay();
                restoreTab();
            }
        });

        // Also trigger on window blur (catches alt-tab, screen capture tools stealing focus)
        window.addEventListener('blur', function() {
            createHideOverlay();
            document.title = cfg.autoHideTitle || 'Google Classroom';
        });
        window.addEventListener('focus', function() {
            if (!document.hidden) {
                removeHideOverlay();
                restoreTab();
            }
        });
    }

    // ═══════════════════════════════════════
    // 2. Idle Auto-Cloak
    // ═══════════════════════════════════════
    if (cfg.idleCloak) {
        var idleTimeout = (cfg.idleCloakMinutes || 2) * 60 * 1000;
        var idleTimer = null;
        var idleCloaked = false;
        var idleOverlay = null;

        var idleFakeHtml = '<div style="text-align:center;font-family:\'Google Sans\',Roboto,Arial,sans-serif;color:#3c4043;max-width:600px;padding:20px;">' +
            '<img src="https://ssl.gstatic.com/classroom/favicon.png" style="width:48px;height:48px;margin-bottom:16px;" alt="">' +
            '<h1 style="font-size:1.375rem;font-weight:400;margin-bottom:8px;color:#202124;">Google Classroom</h1>' +
            '<p style="color:#5f6368;font-size:0.875rem;">Session timed out. Click anywhere to continue.</p></div>';

        function activateIdleCloak() {
            if (idleCloaked) return;
            idleCloaked = true;
            idleOverlay = document.createElement('div');
            idleOverlay.style.cssText = 'position:fixed;inset:0;z-index:999999;background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;';
            var content = document.createElement('div');
            content.innerHTML = idleFakeHtml;
            idleOverlay.appendChild(content);
            idleOverlay.addEventListener('click', deactivateIdleCloak);
            document.body.appendChild(idleOverlay);
            document.title = 'Google Classroom';
            var link = document.querySelector("link[rel~='icon']");
            if (link) link.href = 'https://ssl.gstatic.com/classroom/favicon.png';
        }

        function deactivateIdleCloak() {
            if (!idleCloaked) return;
            idleCloaked = false;
            if (idleOverlay && idleOverlay.parentNode) {
                idleOverlay.parentNode.removeChild(idleOverlay);
                idleOverlay = null;
            }
            var maskEnabled = localStorage.getItem('tabMaskEnabled') === 'true';
            if (maskEnabled && window.VoidSettings) {
                var maskType = localStorage.getItem('tabMaskType');
                if (maskType) window.VoidSettings.applyTabMask(maskType, localStorage.getItem('customTabTitle'), localStorage.getItem('customTabFavicon'));
            } else {
                // Restore default tab
                document.title = 'Not Found';
                var link = document.querySelector("link[rel~='icon']");
                if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
                link.href = 'https://lh7-rt.googleusercontent.com/formsz/AN7BsVDxUhMdM60YDd-DUWlRT3hcYIiAisx3L2uSQuXCcJe6o8wDZuKLLe6_u6rdAhXsZcVLCqcinbroAREncoyWF1zW4GooDPTXg7EChDrE2l1NFsMe7fUdtqcHSPFCXlZF5ZgLCjqeic3bzjdk9NeQZib8RxomY4qchrRkBg?key=yj4V8pHW144VjA9YlEbf1Q';
            }
            resetIdleTimer();
        }

        function resetIdleTimer() {
            clearTimeout(idleTimer);
            idleTimer = setTimeout(activateIdleCloak, idleTimeout);
        }

        ['mousemove', 'keydown', 'mousedown', 'touchstart', 'scroll'].forEach(function(evt) {
            document.addEventListener(evt, resetIdleTimer, { passive: true });
        });
        resetIdleTimer();
    }

    // ═══════════════════════════════════════
    // 3. Extension Detection (comprehensive)
    // ═══════════════════════════════════════
    window.VoidStealthDetections = { detected: [], count: 0, tips: {} };

    function detectExtensions() {
        var detected = [];
        var tips = {};

        // GoGuardian (enhanced)
        if (document.querySelector('[class*="goguardian"]') ||
            document.querySelector('#__ggFrame') ||
            document.querySelector('#__ggg_overlay') ||
            document.querySelector('iframe[src*="goguardian"]') ||
            document.querySelector('[data-goguardian]')) {
            detected.push('GoGuardian');
            tips['GoGuardian'] = 'Enable Tab Freeze Decoy and Force-Close Resistance. Use about:blank cloaking.';
        }

        // Hapara (enhanced)
        if (document.querySelector('[class*="hapara"]') ||
            document.querySelector('#hapara-popup') ||
            document.querySelector('div[data-hapara]') ||
            document.querySelector('[class*="h-control"]') ||
            document.querySelector('iframe[src*="hapara"]')) {
            detected.push('Hapara');
            tips['Hapara'] = 'Enable Screen Feed Poisoning to show a fake page to the teacher dashboard. Use blob URL cloaking.';
        }

        // Securly (enhanced)
        if (document.querySelector('[class*="securly"]') ||
            document.querySelector('#securly-overlay') ||
            document.querySelector('iframe[src*="securly"]') ||
            document.querySelector('[data-securly]')) {
            detected.push('Securly');
            tips['Securly'] = 'Securly uses DNS filtering. The site proxy bypasses this. Enable auto-hide for extra protection.';
        }

        // Lightspeed
        if (document.querySelector('[class*="lightspeed"]') ||
            document.querySelector('[class*="ls-smart-agent"]') ||
            document.querySelector('iframe[src*="lightspeed"]') ||
            document.querySelector('[class*="relay-"]')) {
            detected.push('Lightspeed');
            tips['Lightspeed'] = 'Lightspeed monitors screen and browser activity. Enable auto-hide and anti-screenshot.';
        }

        // Bark
        if (document.querySelector('[class*="bark-"]') ||
            document.querySelector('[data-bark]')) {
            detected.push('Bark');
            tips['Bark'] = 'Bark monitors for keywords and content. Tab masking and auto-hide help avoid detection.';
        }

        // Gaggle
        if (document.querySelector('[class*="gaggle"]') ||
            document.querySelector('[data-gaggle]')) {
            detected.push('Gaggle');
            tips['Gaggle'] = 'Gaggle scans content and screenshots. Enable anti-screenshot and auto-hide.';
        }

        // Blocksi
        if (document.querySelector('[class*="blocksi"]') ||
            document.querySelector('iframe[src*="blocksi"]')) {
            detected.push('Blocksi');
            tips['Blocksi'] = 'Blocksi filters by category. The proxy should bypass it. Use blob cloaking for extra safety.';
        }

        // Cisco Umbrella / OpenDNS
        if (document.querySelector('[class*="umbrella"]') ||
            document.querySelector('[class*="opendns"]')) {
            detected.push('Cisco Umbrella');
            tips['Cisco Umbrella'] = 'Umbrella uses DNS filtering. The site proxy routes around it. No extra action needed.';
        }

        // ContentKeeper
        if (document.querySelector('[class*="contentkeeper"]') ||
            document.querySelector('[class*="ck-auth"]')) {
            detected.push('ContentKeeper');
            tips['ContentKeeper'] = 'ContentKeeper does deep packet inspection. Use HTTPS proxy and blob cloaking.';
        }

        // iBoss
        if (document.querySelector('[class*="iboss"]') ||
            document.querySelector('iframe[src*="iboss"]')) {
            detected.push('iBoss');
            tips['iBoss'] = 'iBoss uses cloud proxy filtering. The site proxy should work. Enable stealth features for screenshots.';
        }

        // Fortinet / FortiGuard
        if (document.querySelector('[class*="fortinet"]') ||
            document.querySelector('[class*="fortiguard"]')) {
            detected.push('Fortinet');
            tips['Fortinet'] = 'Fortinet blocks by category. Proxy bypasses the filter. Enable tab masking.';
        }

        // Smoothwall
        if (document.querySelector('[class*="smoothwall"]')) {
            detected.push('Smoothwall');
            tips['Smoothwall'] = 'Smoothwall is a network filter. Proxy bypasses it. Enable auto-hide for screen monitoring.';
        }

        window.VoidStealthDetections = {
            detected: detected,
            count: detected.length,
            tips: tips,
            timestamp: Date.now()
        };

        return detected;
    }

    // Always run detection
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(detectExtensions, 500);
        });
    } else {
        setTimeout(detectExtensions, 500);
    }

    // ═══════════════════════════════════════
    // 4. GoGuardian Tab Freeze Decoy
    //    Continuously overrides document.title
    //    so GoGuardian's DOM snapshots see a fake name
    // ═══════════════════════════════════════
    if (cfg.tabFreezeDecoy) {
        var freezeTitle = cfg.tabFreezeTitle || 'Google Classroom';
        var freezeInterval = setInterval(function() {
            // Only override if no other overlay is active
            if (!document.hidden) {
                var maskEnabled = localStorage.getItem('tabMaskEnabled') === 'true';
                if (maskEnabled) {
                    // Let tab mask handle it
                } else {
                    document.title = freezeTitle;
                }
            }
        }, 200);
    }

    // ═══════════════════════════════════════
    // 5. Extension Message Interception
    //    Block/modify GoGuardian postMessage comms
    // ═══════════════════════════════════════
    if (cfg.messageInterception) {
        var origPostMessage = window.postMessage.bind(window);
        var blockedOrigins = ['goguardian', 'hapara', 'securly', 'lightspeed', 'relay'];

        window.addEventListener('message', function(e) {
            if (!e.origin) return;
            var origin = e.origin.toLowerCase();
            for (var i = 0; i < blockedOrigins.length; i++) {
                if (origin.indexOf(blockedOrigins[i]) !== -1) {
                    e.stopImmediatePropagation();
                    return;
                }
            }
        }, true);
    }

    // ═══════════════════════════════════════
    // 6. Force-Close Resistance
    //    Detect when GoGuardian tries to close the tab
    //    and reopen in about:blank before it completes
    // ═══════════════════════════════════════
    if (cfg.forceCloseResist) {
        window.addEventListener('beforeunload', function(e) {
            // Only trigger if not a user-initiated navigation
            if (!window._voidUserNav) {
                try {
                    var win = window.open('about:blank', '_blank');
                    if (win) {
                        win.document.write('<!DOCTYPE html><html><head><title>Google Classroom</title>' +
                            '<link rel="icon" href="https://ssl.gstatic.com/classroom/favicon.png">' +
                            '</head><body style="margin:0;overflow:hidden;">' +
                            '<iframe src="' + window.location.origin + '" style="width:100vw;height:100vh;border:none;"></iframe>' +
                            '</body></html>');
                        win.document.close();
                    }
                } catch (err) {}
            }
        });

        // Mark user-initiated navigations
        document.addEventListener('click', function(e) {
            var a = e.target.closest('a');
            if (a && a.href) window._voidUserNav = true;
            setTimeout(function() { window._voidUserNav = false; }, 100);
        });
    }

    // ═══════════════════════════════════════
    // 7. Hapara Screen Feed Poisoning
    //    Overlay a fake Google Docs page that Hapara's
    //    screenshot capture sees, but users click through
    // ═══════════════════════════════════════
    if (cfg.screenFeedPoison) {
        var poisonOverlay = document.createElement('div');
        poisonOverlay.id = 'void-hapara-poison';
        poisonOverlay.style.cssText = 'position:fixed;inset:0;z-index:999990;pointer-events:none;background:transparent;';
        poisonOverlay.innerHTML = '<div style="position:absolute;inset:0;background:#fff;opacity:0.001;pointer-events:none;">' +
            '<div style="padding:60px 80px;font-family:\'Docs\',Arial,sans-serif;">' +
            '<div style="font-size:28px;color:#202124;margin-bottom:30px;">Untitled document</div>' +
            '<div style="width:100%;height:1px;background:#dadce0;margin-bottom:20px;"></div>' +
            '<div style="font-size:14px;color:#202124;line-height:1.8;">' +
            'The quick brown fox jumps over the lazy dog. ' +
            'This is a standard document for class notes. ' +
            'Please review the assignment instructions carefully.</div></div></div>';

        function addPoisonOverlay() {
            if (!document.getElementById('void-hapara-poison')) {
                document.body.appendChild(poisonOverlay);
            }
        }

        if (document.body) addPoisonOverlay();
        else document.addEventListener('DOMContentLoaded', addPoisonOverlay);
    }

    // ═══════════════════════════════════════
    // 8. PrintScreen Trap
    //    Flash a fake school page for 500ms on PrintScreen
    // ═══════════════════════════════════════
    if (cfg.printScreenTrap) {
        var psOverlay = null;

        function flashFakePage() {
            if (psOverlay) return;
            psOverlay = document.createElement('div');
            psOverlay.style.cssText = 'position:fixed;inset:0;z-index:999999;background:#fff;display:flex;align-items:center;justify-content:center;';
            psOverlay.innerHTML = '<div style="text-align:center;font-family:\'Google Sans\',Roboto,Arial,sans-serif;color:#3c4043;">' +
                '<img src="https://ssl.gstatic.com/classroom/favicon.png" style="width:48px;height:48px;margin-bottom:16px;" alt="">' +
                '<h1 style="font-size:1.375rem;font-weight:400;color:#202124;">Google Classroom</h1>' +
                '<p style="color:#5f6368;font-size:0.875rem;">Welcome back!</p></div>';
            document.body.appendChild(psOverlay);

            setTimeout(function() {
                if (psOverlay && psOverlay.parentNode) {
                    psOverlay.parentNode.removeChild(psOverlay);
                    psOverlay = null;
                }
            }, 500);
        }

        document.addEventListener('keyup', function(e) {
            if (e.key === 'PrintScreen' || e.code === 'PrintScreen') {
                flashFakePage();
            }
        }, true);

        document.addEventListener('keydown', function(e) {
            if (e.key === 'PrintScreen' || e.code === 'PrintScreen') {
                flashFakePage();
            }
        }, true);
    }

    // ═══════════════════════════════════════
    // 9. History Flood (cover tracks)
    //    Two-pronged approach:
    //    A) pushState flood for back-button history
    //    B) Hidden iframe navigations for real browser history (chrome://history)
    //    Runs on load and repeats every 30s to keep flooding
    // ═══════════════════════════════════════
    if (cfg.historyFlood) {
        var eduUrls = [
            'https://classroom.google.com',
            'https://classroom.google.com/u/0/h',
            'https://classroom.google.com/u/0/a/not-turned-in/all',
            'https://docs.google.com/document/d/1/edit',
            'https://docs.google.com/presentation/d/1/edit',
            'https://docs.google.com/spreadsheets/d/1/edit',
            'https://drive.google.com/drive/my-drive',
            'https://drive.google.com/drive/shared-with-me',
            'https://mail.google.com/mail/u/0/#inbox',
            'https://calendar.google.com/calendar/u/0/r',
            'https://www.khanacademy.org/math/algebra',
            'https://www.khanacademy.org/science/biology',
            'https://www.khanacademy.org/math/geometry',
            'https://www.khanacademy.org/computing/computer-programming',
            'https://quizlet.com/latest',
            'https://quizlet.com/search?query=biology',
            'https://www.ixl.com/math/grade-8',
            'https://www.ixl.com/ela/grade-8',
            'https://canvas.instructure.com/courses',
            'https://www.brainpop.com/science/energy',
            'https://www.commonlit.org/en/library',
            'https://www.desmos.com/calculator',
            'https://www.edpuzzle.com/assignments',
            'https://www.newsela.com/read',
            'https://www.duolingo.com/learn',
            'https://www.typing.com/student/lessons',
            'https://clever.com/in/school',
            'https://app.schoology.com/home',
            'https://www.pearson.com/en-us/schools.html',
            'https://www.noredink.com/assignments',
            'https://student.readingplus.com',
            'https://play.prodigygame.com',
            'https://www.deltamath.com/app/student',
            'https://www.vocabulary.com/lists',
            'https://slides.google.com/presentation/d/1/edit',
            'https://sites.google.com/view/my-project'
        ];

        var eduPaths = eduUrls.map(function(u) { return '/' + u.replace('https://', ''); });

        // A) pushState flood for back-button history
        function floodPushState() {
            var realUrl = window.location.pathname + window.location.search + window.location.hash;
            var count = 15 + Math.floor(Math.random() * 10); // 15-24 entries
            for (var i = 0; i < count; i++) {
                var path = eduPaths[Math.floor(Math.random() * eduPaths.length)];
                try { window.history.pushState({}, '', path); } catch (e) {}
            }
            try { window.history.pushState({}, '', realUrl); } catch (e) {}
        }

        // B) Real browser history flood using window.open()
        //    Opens a tiny background popup, navigates it through edu URLs, then closes it.
        //    Each navigation creates a real chrome://history entry.
        var floodWindow = null;

        function floodWithPopup() {
            // Shuffle and pick a batch of URLs
            var batch = eduUrls.slice().sort(function() { return Math.random() - 0.5; });
            var batchSize = 8 + Math.floor(Math.random() * 8); // 8-15 URLs per cycle
            batch = batch.slice(0, batchSize);

            var idx = 0;
            function nextNav() {
                if (idx >= batch.length) {
                    // Done with batch — close window after a moment
                    setTimeout(function() {
                        try { if (floodWindow && !floodWindow.closed) floodWindow.close(); } catch (e) {}
                        floodWindow = null;
                    }, 2000);
                    return;
                }

                try {
                    // Open or reuse popup — tiny, positioned off-screen
                    if (!floodWindow || floodWindow.closed) {
                        floodWindow = window.open(batch[idx], '_blank_flood', 'width=1,height=1,left=-9999,top=-9999,menubar=no,toolbar=no,location=no,status=no,scrollbars=no,resizable=no');
                        if (!floodWindow) return; // popup blocked
                    } else {
                        floodWindow.location.href = batch[idx];
                    }
                    // Push popup behind and refocus main window
                    try { floodWindow.blur(); } catch (e2) {}
                    window.focus();
                } catch (e) {}

                idx++;
                // 1-3 second delay between navigations so pages actually register in history
                setTimeout(nextNav, 1000 + Math.floor(Math.random() * 2000));
            }
            nextNav();
        }

        // Run initial pushState flood immediately
        floodPushState();

        // For popup-based history flood, wait for first user interaction
        // (browsers block window.open without user gesture)
        var popupFloodStarted = false;
        function startPopupFlood() {
            if (popupFloodStarted) return;
            popupFloodStarted = true;
            // Remove listeners once triggered
            document.removeEventListener('click', startPopupFlood, true);
            document.removeEventListener('keydown', startPopupFlood, true);
            document.removeEventListener('touchstart', startPopupFlood, true);

            // First popup flood
            floodWithPopup();

            // Repeat every 45 seconds
            setInterval(function() {
                floodPushState();
                floodWithPopup();
            }, 45000);
        }

        // Listen for any user interaction to start popup flood
        document.addEventListener('click', startPopupFlood, true);
        document.addEventListener('keydown', startPopupFlood, true);
        document.addEventListener('touchstart', startPopupFlood, true);

        // Also repeat pushState flood on its own every 30 seconds
        setInterval(floodPushState, 30000);
    }

    // ═══════════════════════════════════════
    // 10. Right-Click / Keyboard Protection
    // ═══════════════════════════════════════
    if (cfg.disableRightClick) {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    }

    if (cfg.disableKeyShortcuts) {
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey && e.key === 'u') ||
                (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
                (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
                (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
                e.key === 'F12') {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);
    }

    // ═══════════════════════════════════════
    // 11. Anti-Screenshot (CSS blur on focus loss)
    // ═══════════════════════════════════════
    if (cfg.antiScreenshot) {
        var ssStyle = document.createElement('style');
        ssStyle.id = 'void-anti-ss';
        ssStyle.textContent = '';
        document.head.appendChild(ssStyle);

        window.addEventListener('blur', function() {
            ssStyle.textContent = 'body > *:not([style*="z-index:999999"]) { filter: blur(20px) !important; transition: filter 0.15s ease !important; }';
        });
        window.addEventListener('focus', function() {
            ssStyle.textContent = '';
        });
    }

    // ═══════════════════════════════════════
    // 12. Domain Rotation Awareness
    //     Detect when current domain is blocked and redirect
    // ═══════════════════════════════════════
    if (cfg.domainRotation) {
        var mirrors = [];
        try { mirrors = JSON.parse(localStorage.getItem('voidMirrors')) || []; } catch (e) {}

        if (mirrors.length > 0) {
            // Test if current domain works by checking a known endpoint
            fetch('/api/ping', { method: 'HEAD', cache: 'no-store' })
                .catch(function() {
                    // Current domain might be blocked, try mirrors
                    var current = window.location.hostname;
                    for (var m = 0; m < mirrors.length; m++) {
                        if (mirrors[m] !== current) {
                            window.location.href = window.location.protocol + '//' + mirrors[m] + window.location.pathname;
                            break;
                        }
                    }
                });
        }
    }

    // ═══════════════════════════════════════
    // 13. Expose API for settings page
    // ═══════════════════════════════════════
    window.VoidStealth = {
        getConfig: getConfig,
        saveConfig: saveConfig,
        detectExtensions: detectExtensions,
        features: [
            'autoHide', 'idleCloak', 'antiScreenshot', 'printScreenTrap',
            'historyFlood', 'disableRightClick', 'disableKeyShortcuts',
            'tabFreezeDecoy', 'messageInterception', 'forceCloseResist',
            'screenFeedPoison'
        ],
        enableMaxStealth: function() {
            saveConfig({
                autoHide: true,
                autoHideTitle: 'Google Classroom',
                idleCloak: true,
                idleCloakMinutes: 2,
                extensionDetect: true,
                historyFlood: true,
                disableRightClick: true,
                disableKeyShortcuts: true,
                antiScreenshot: true,
                printScreenTrap: true,
                tabFreezeDecoy: true,
                tabFreezeTitle: 'Google Classroom',
                messageInterception: true,
                forceCloseResist: true,
                screenFeedPoison: true
            });
            location.reload();
        },
        disableAll: function() {
            localStorage.removeItem(STEALTH_KEY);
            location.reload();
        }
    };
})();
