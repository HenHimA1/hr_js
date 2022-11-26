import { companySchema } from "./company";
import { errorSchema } from "./error";
import { userSchema } from "./user";
import { notificationSchema, createNotificationSchema } from "./notification";
import { loginAuthSchema, tokenAuthSchema } from "./auth";

export const schemas = Object.assign(
  {},
  loginAuthSchema,
  tokenAuthSchema,
  companySchema,
  errorSchema,
  userSchema,
  notificationSchema,
  createNotificationSchema
);
