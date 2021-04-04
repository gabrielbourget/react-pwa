import { generateAppServerKey } from "./helpers";

const PUBLIC_VAPID_KEY = "BLm0Ndfp_ccAQigOX0MtN9_bYSFgZ0ZKA_adhRjEI6jY62QGdpaJ_YDEfsiH03B6MKnS_rAocFdSb2RYUAg0W8U";
// const PRIVATE_VAPID_KEY = "9pBh8yuQX9PP9l4hmA9Ok0BwlabAqKeBOqO8Q6y6Jic";

const swDev = () => {
  let swURL = `${process.env.PUBLIC_URL}/sw.js`;
  
  const appServerKey = generateAppServerKey(PUBLIC_VAPID_KEY);

  window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register(swURL)
        .then((swReg) => {
          console.log(`[service-worker]: Registration complete -> ${swReg}`);

          return swReg.pushManager.getSubscription().then((subscription) => {
            return swReg.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: appServerKey,
            });
          });
        }).catch((err) => console.error(`[service-worker]: Problem with registration -> ${err}`));
    }
  });
}

export default swDev;
