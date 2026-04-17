// Local ytgame SDK stub - replaces YouTube Playables SDK
// Provides all APIs the game expects without iframe restrictions
(function() {
    'use strict';

    var savedData = localStorage.getItem('bowmasters_save') || '{}';

    window.ytgame = {
        game: {
            firstFrameReady: function() {},
            gameReady: function() {},
            loadData: function() {
                return Promise.resolve(savedData);
            },
            saveData: function(data) {
                try {
                    localStorage.setItem('bowmasters_save', data);
                } catch(e) {}
                return Promise.resolve();
            }
        },
        system: {
            getLanguage: function() {
                return Promise.resolve(navigator.language || 'en');
            },
            isAudioEnabled: function() {
                return Promise.resolve(true);
            },
            onAudioEnabledChange: function(cb) {},
            onPause: function(cb) {
                document.addEventListener('visibilitychange', function() {
                    if (document.hidden) cb();
                });
            },
            onResume: function(cb) {
                document.addEventListener('visibilitychange', function() {
                    if (!document.hidden) cb();
                });
            }
        },
        health: {
            logError: function() {}
        },
        engagement: {
            sendScore: function(score) {
                return Promise.resolve();
            }
        }
    };
})();
