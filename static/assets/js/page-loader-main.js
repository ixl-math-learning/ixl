window.VoidNetworkLoader = {
    scriptsList: [
        '/assets/footer/footer.js',
        '/assets/js/settings.js',
        '/assets/js/blank.js',
        '/assets/js/particles.js'
    ],

    addScript: function(scriptPath) {
        if (!this.scriptsList.includes(scriptPath)) {
            this.scriptsList.push(scriptPath);
        }
    },

    addScripts: function(scriptPaths) {
        scriptPaths.forEach(path => this.addScript(path));
    },

    loadAllScripts: function() {

        const existingSrcs = new Set();
        document.querySelectorAll('script[src]').forEach(s => {
            try { existingSrcs.add(new URL(s.src).pathname); } catch {}
        });

        this.scriptsList.forEach(scriptPath => {

            const absPath = scriptPath.startsWith('/') ? scriptPath : '/' + scriptPath;
            if (existingSrcs.has(absPath)) return;

            const script = document.createElement('script');
            script.src = scriptPath;
            document.head.appendChild(script);
        });
    },

    init: function() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadAllScripts());
        } else {
            this.loadAllScripts();
        }
    }
};

window.addScript = function(scriptPath) {
    window.VoidNetworkLoader.addScript(scriptPath);
};

window.addScripts = function(scriptPaths) {
    window.VoidNetworkLoader.addScripts(scriptPaths);
};

(function() {
    const currentScript = document.currentScript;
    if (currentScript) {
        const additionalScripts = currentScript.getAttribute('data-scripts');
        if (additionalScripts) {
            const scripts = additionalScripts.split(',').map(s => s.trim());
            window.VoidNetworkLoader.addScripts(scripts);
        }
    }
})();

window.VoidNetworkLoader.init();
