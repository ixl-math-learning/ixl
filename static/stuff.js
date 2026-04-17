const { ScramjetController } = $scramjetLoadController();

const scramjet = new ScramjetController({
    prefix: "/~r/p/",
    files: {
        wasm: "/~r/1/scramjet.wasm.wasm",
        all: "/~r/1/scramjet.all.js",
        sync: "/~r/1/scramjet.sync.js",
    },
    flags: {
        serviceworkers: false,
        syncxhr: false,
        strictRewrites: false,
        rewriterLogs: false,
        captureErrors: false,
        cleanErrors: false,
        scramitize: false,
        sourcemaps: false,
        destructureRewrites: false,
        interceptDownloads: false,
        allowInvalidJs: true
    }
});

try {
    if (navigator.serviceWorker) {
        scramjet.init();
        navigator.serviceWorker.register("./sw.js", { updateViaCache: 'none' });
    } else {
        console.warn("Service workers not supported");
    }
} catch (e) {
    console.error("Failed to initialize Scramjet:", e);
}

const connection = new BareMux.BareMuxConnection("/~r/2/worker.js");
const wispUrl =
    (location.protocol === "https:" ? "wss" : "ws") +
    "://" +
    location.host +
    "/~r/9/";
const bareUrl = location.origin + "/~r/8/";

async function setTransport(transportsel) {
    switch (transportsel) {
        case "epoxy":
            await connection.setTransport("/~r/3/index.mjs", [{ wisp: wispUrl }]);
            break;
        case "libcurl":
            await connection.setTransport("/~r/4/index.mjs", [{ websocket: wispUrl }]);
            break;
        default:
            await connection.setTransport("/~r/5/index.mjs", [bareUrl]);
            break;
    }
}

function search(input) {
    let template = "https://duckduckgo.com/?q=%s";
    try {
        return new URL(input).toString();
    } catch (err) {}

    try {
        let url = new URL(`http://${input}`);
        if (url.hostname.includes(".")) return url.toString();
    } catch (err) {}

    return template.replace("%s", encodeURIComponent(input));
}

setTransport("epoxy");

document.getElementById("idk").addEventListener("submit", async (event) => {
    event.preventDefault();
    let fixedurl = search(document.getElementById("url").value);
    let url;
    if (document.getElementById("proxysel").value === "uv") {
        url = __uv$config.prefix + __uv$config.encodeUrl(fixedurl);
    } else {
        url = scramjet.encodeUrl(fixedurl);
    }
    document.getElementById("iframe").src = url;
});
