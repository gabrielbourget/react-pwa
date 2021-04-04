importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("../firebase-messaging-sw.js")
    .then((swReg) => console.log(`Firebase messaging sw reg successful -> ${swReg}`))
    .catch((err) => console.error(`Firebase messaging sw reg unsuccessful -> ${err}`));
}

firebase.initializeApp({
  messagingSenderId: "978810250517",
});

const initMessaging = firebase.messaging();