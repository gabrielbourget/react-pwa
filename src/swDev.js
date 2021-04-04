const swDev = () => {
  let swURL = `${process.env.PUBLIC_URL}/sw.js`;
  
  window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register(swURL)
        .then((swReg) => console.log(`[service-worker]: Registration complete -> ${swReg}`))
        .catch((err) => console.error(`[service-worker]: Problem with registration -> ${err}`));
    }
  });
}

export default swDev;
