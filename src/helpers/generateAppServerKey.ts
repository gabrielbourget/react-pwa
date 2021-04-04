import { URLBase64ToUInt8Array } from "./URLBase64ToUInt8Array";

export const generateAppServerKey = (vapidPublicKey: string) => {
  return URLBase64ToUInt8Array(vapidPublicKey);
};
