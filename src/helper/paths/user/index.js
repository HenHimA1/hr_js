import { getUser } from "./get";
import { userId } from "./id";

export const userPath = {
  "/user": { get: getUser },
  "/user/{userId}": userId,
};
