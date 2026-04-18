window.receiveMessage = function(event) {
    if (event.data && event.data.type === 'gtag_event') {
      if (window.self !== window.top) {
        window.parent.location.href = event.data.eventName;
      } else {
        window.location.href = event.data.eventName;
      }
    }
  };
  window.addEventListener('message', receiveMessage, false);