const swDev = () => {
  let swURL = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swURL)
    .then((swReg) => console.log(`[service-worker]: Registration complete`))
    .catch((err) => console.error(`[service-worker]: Problem with registration -> ${err}`));
}

export default swDev;