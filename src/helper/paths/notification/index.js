import { getNotification } from "./get";
import { postNotification } from "./post";

export const notificationPath = {
  "/notification": { get: getNotification, post: postNotification },
};
