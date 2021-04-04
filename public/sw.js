const STATIC_CACHE_NAME = "app-cache-v1";

const staticAssets = [
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/bundle.js",
  "/static/js/vendors~main.chunk.js",
  "/", "/index.html"
];

const self = this;

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(STATIC_CACHE_NAME).then((cache) => {
      cache.addAll(staticAssets);
    })
  );
});

self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((response) => {
      if (!response) {

      }
      
      return response;
    })
  );
})