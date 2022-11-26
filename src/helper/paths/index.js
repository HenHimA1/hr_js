import { companyPath } from "./company";
import { userPath } from "./user";
import { notificationPath } from "./notification";
import { authPath } from "./auth";

export const paths = Object.assign(
  {},
  authPath,
  companyPath,
  userPath,
  notificationPath
);
