window.PokiSDK = {
    init: function() { return Promise.resolve(); },
    gameLoadingStart: function() {},
    gameLoadingFinished: function() {},
    gameplayStart: function() {},
    gameplayStop: function() {},
    commercialBreak: function() { return Promise.resolve(); },
    rewardedBreak: function() { return Promise.resolve(true); },
    setDebug: function() {},
    isAdBlocked: function() { return false; },
    getURLParam: function() { return ""; },
    enableEventTracking: function() {},
    sendCustomEvent: function() {},
    logError: function() {}
};
