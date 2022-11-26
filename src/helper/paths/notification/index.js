import { getNotification } from "./get";
import { postNotification } from "./post";
import { notificationId } from "./id";

export const notificationPath = {
  "/notification": { get: getNotification, post: postNotification },
  "/notification/{notificationId}": notificationId,
};
