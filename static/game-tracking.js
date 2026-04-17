(function() {
    const COOLDOWN_DURATION = 3 * 60 * 1000;
    const TOKEN_KEY = 'visitToken';
    const API_URL = '/api/track-game';

    function getGameTitle() {
        const queryString = window.location.search.substring(1);
        if (!queryString) return null;


        const params = new URLSearchParams(queryString);
        let titleParam = params.get('title');


        if (!titleParam) {
            try {
                const base64 = queryString.replace(/-/g, '+').replace(/_/g, '/');
                const decoded = atob(base64);
                const decodedParams = new URLSearchParams(decoded);
                titleParam = decodedParams.get('title');
            } catch (e) {}
        }

        if (!titleParam) return null;
        try {
            return atob(titleParam);
        } catch (e) {
            return null;
        }
    }

    function getToken() {
        try {
            const token = localStorage.getItem(TOKEN_KEY);
            return token ? JSON.parse(token) : null;
        } catch (e) {
            return null;
        }
    }

    function setToken(gameTitle) {
        const token = {
            game: gameTitle,
            timestamp: Date.now()
        };
        try {
            localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
        } catch (e) {
            console.error('Failed to set token');
        }
    }

    function isTokenValid(gameTitle) {
        const token = getToken();
        if (!token) return false;
        if (token.game !== gameTitle) return false;
        const elapsed = Date.now() - token.timestamp;
        return elapsed < COOLDOWN_DURATION;
    }

    async function trackVisit() {
        const gameTitle = getGameTitle();
        if (!gameTitle) return;

        if (isTokenValid(gameTitle)) {
            return;
        }

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ gameTitle })
            });

            if (response.ok) {
                setToken(gameTitle);
            }
        } catch (error) {
            console.error('Failed to track game visit:', error);
        }
    }

    if (window.location.pathname.includes('view.html')) {
        trackVisit();
    }
})();
