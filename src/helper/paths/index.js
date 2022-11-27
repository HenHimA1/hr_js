import { companyPath } from "./company";
import { userPath } from "./user";
import { notificationPath } from "./notification";
import { authPath } from "./auth";
import { attendancePath } from "./attendance";

export const paths = Object.assign(
  {},
  attendancePath,
  authPath,
  companyPath,
  userPath,
  notificationPath
);
