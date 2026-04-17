window.firebase = {
    initializeApp: function(c) { return {}; },
    storage: function(a) {
        return { ref: function(p) { return {
            getDownloadURL: function() { return Promise.reject("offline"); },
            put: function() { return Promise.reject("offline"); }
        }; } };
    },
    auth: function(a) {
        var u = { uid: "offline_user" };
        return {
            signInAnonymously: function() { return Promise.resolve({ user: u }); },
            onAuthStateChanged: function(cb) { setTimeout(function(){ cb(u); }, 0); },
            currentUser: u
        };
    },
    analytics: function() { return { logEvent: function(){} }; },
    remoteConfig: function() {
        return {
            settings: {},
            defaultConfig: {},
            fetchAndActivate: function() { return Promise.resolve(); },
            getValue: function() { return { asString: function(){ return ""; }, asNumber: function(){ return 0; } }; },
            getAll: function() { return {}; }
        };
    }
};
