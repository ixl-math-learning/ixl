(function() {
    var enabled = localStorage.getItem('panicKeyEnabled') === 'true';
    if (!enabled) return;

    var comboStr = localStorage.getItem('panicKeyCombo');
    if (!comboStr) return;

    var combo;
    try { combo = JSON.parse(comboStr); } catch (e) { return; }
    if (!combo || !combo.key) return;

    var action = localStorage.getItem('panicKeyAction') || 'close';
    var redirectUrl = localStorage.getItem('panicKeyRedirectUrl') || 'https://classroom.google.com';

    function matchesCombo(e) {
        return e.key.toLowerCase() === combo.key.toLowerCase() &&
            !!e.ctrlKey === !!combo.ctrlKey &&
            !!e.altKey === !!combo.altKey &&
            !!e.shiftKey === !!combo.shiftKey;
    }

    function executePanic() {
        if (action === 'close') {
            window.open('about:blank', '_self');
            window.close();
            setTimeout(function() {
                try { open(location, '_self').close(); } catch (e) {}
            }, 50);
            setTimeout(function() {
                window.location.replace('about:blank');
            }, 150);

        } else if (action === 'redirect') {
            var url = redirectUrl;
            if (url.indexOf('://') === -1) url = 'https://' + url;
            window.location.replace(url);

        } else if (action === 'troll') {
            document.title = 'Untitled Document';
            var link = document.querySelector("link[rel~='icon']");
            if (link) link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

            document.documentElement.innerHTML = '<!DOCTYPE html><html><head><title>Untitled Document</title><style>*{margin:0;padding:0;box-sizing:border-box;}body{background:#fff;display:flex;align-items:center;justify-content:center;height:100vh;width:100vw;font-family:Arial,sans-serif;}</style></head><body><div style="text-align:center;"><p style="font-size:3rem;font-weight:900;color:#222;">no game here :)</p></div></body></html>';

            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(regs) {
                    regs.forEach(function(r) { r.unregister(); });
                });
            }
            window.history.replaceState(null, '', '/');
        }
    }

    document.addEventListener('keydown', function(e) {
        if (matchesCombo(e)) {
            e.preventDefault();
            e.stopImmediatePropagation();
            executePanic();
        }
    }, true);
})();
