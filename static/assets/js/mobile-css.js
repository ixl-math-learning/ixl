(function() {
    function isMobileDevice() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        const mobileRegex = /android|blackberry|iemobile|ipad|iphone|ipod|opera mini|opera mobi|webos|windows phone/i;

        if (mobileRegex.test(userAgent)) {
            return true;
        }

        if (window.innerWidth <= 768) {
            return true;
        }

        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            return true;
        }

        return false;
    }

    function loadMobileCSS() {
        const currentPath = window.location.pathname;
        let cssPath = '';

        if (currentPath === '/' || currentPath === '/index.html') {
            cssPath = '/pages/home/home-mobile.css';
        } else if (currentPath === '/g.html' || currentPath.includes('/g.html')) {
            cssPath = '/pages/g/g-mobile.css';
        } else if (currentPath === '/a.html' || currentPath.includes('/a.html')) {
            cssPath = '/pages/a/a-mobile.css';
        } else if (currentPath === '/c.html' || currentPath.includes('/c.html')) {
            cssPath = '/pages/c/c-mobile.css';
        } else if (currentPath === '/s.html' || currentPath.includes('/s.html')) {
            cssPath = '/pages/s/s-mobile.css';
        } else if (currentPath === '/vg.html' || currentPath.includes('/vg.html')) {
            cssPath = '/pages/vg/vg-mobile.css';
        }

        if (cssPath) {
            const existingCSS = document.querySelectorAll('link[rel="stylesheet"]');
            existingCSS.forEach(link => {
                if (!link.href.includes('-mobile.css')) {
                    link.remove();
                }
            });

            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = cssPath;
            document.head.appendChild(link);
        }
    }

    if (isMobileDevice()) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadMobileCSS);
        } else {
            loadMobileCSS();
        }
    }
})();
