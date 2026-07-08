const CACHE_NAME = "raices-menu-v5";

const CORE_ASSETS = [
    "./",
    "./index.html",
    "./para-compartir.html",
    "./de-la-finca.html",
    "./pastas.html",
    "./del-mar.html",
    "./de-la-tierra.html",
    "./postres.html",
    "./para-los-peques.html",
    "./cocteles.html",
    "./vinos-blancos.html",
    "./vinos-rosados.html",
    "./tintos.html",
    "./cavas-prosecco.html",
    "./manifest.webmanifest",
    "./css/styles.css",
    "./js/menu-data.js",
    "./js/translations.js",
    "./js/app.js",
    "./assets/img/logo-raices-source.jpeg",
    "./assets/img/logo-raices.png",
    "./assets/img/platos/placeholder-plato.svg",
    "./assets/img/platos/pina-colada.png",
    "./assets/img/platos/pina-colada.webp",
    "./assets/icons/icon-192.png",
    "./assets/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(CORE_ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys
                    .filter((key) => key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    const request = event.request;

    if (request.method !== "GET") {
        return;
    }

    const requestUrl = new URL(request.url);
    if (requestUrl.origin !== self.location.origin) {
        return;
    }

    if (request.mode === "navigate") {
        event.respondWith(
            caches.match(request)
                .then((cached) => fetch(request)
                    .then((response) => {
                        const copy = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                        return response;
                    })
                    .catch(() => cached || caches.match("./index.html")))
        );
        return;
    }

    event.respondWith(
        caches.match(request)
            .then((cached) => {
                const networkFetch = fetch(request)
                    .then((response) => {
                        if (response && response.ok) {
                            const copy = response.clone();
                            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                        }
                        return response;
                    })
                    .catch(() => cached);

                return cached || networkFetch;
            })
    );
});
