"use strict";

const form = document.getElementById("uv-form");

const address = document.getElementById("uv-address");

const searchEngine = document.getElementById("uv-search-engine");

const error = document.getElementById("uv-error");

const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  const browserIframe = document.getElementById("browser-iframe");
  if (browserIframe) {
    browserIframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    browserIframe.style.display = "block";
    document.getElementById("welcome-screen").style.display = "none";
  }
});