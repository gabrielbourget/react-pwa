const STATIC_CACHE_NAME = "app-cache-v1";

const staticAssets = [
  "/static/js/main.chunk.js",
  "/static/js/main.chunk.js.map",
  "/static/js/0.chunk.js",
  "/static/js/bundle.js",
  "/static/js/vendors~main.chunk.js",
  "/", "/index.html", "/users", "/about"
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
  
  if (!navigator.online) {
    // -> Hacky way to do this, there are programmatic ways to get a notification not to repeat.
    //   -> Refer to Google Code Lab on push notifications to see this.
    //     -> https://developers.google.com/web/ilt/pwa/lab-integrating-web-push#41_generate_the_keys
    if (evt.request.url === "http://localhost:3000/static/js/main.chunk.js") {
      evt.waitUntil(
        self.registration.showNotification("Internet is not working", {
          body: "Boop"
        })
      );
    }
    evt.respondWith(
      caches.match(evt.request).then((response) => {
        if (!response) {
          let requestURL = evt.request.clone();
          return fetch(requestURL);
        }
        
        return response;
      })
    );
  }
})
