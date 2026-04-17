(function() {
    function initializeGA() {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-814Y2X3KSF';
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-814Y2X3KSF');

        if (document.body && !document.querySelector('noscript[data-ga-fallback]')) {
            const noscript = document.createElement('noscript');
            noscript.setAttribute('data-ga-fallback', 'true');
            noscript.innerHTML = '<img src="https://www.google-analytics.com/collect?v=1&tid=G-814Y2X3KSF&cid=555&t=pageview&dp=' + encodeURIComponent(window.location.pathname) + '&dt=' + encodeURIComponent(document.title) + '" style="display:none;">';
            document.body.appendChild(noscript);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeGA);
    } else {
        initializeGA();
    }
})();
