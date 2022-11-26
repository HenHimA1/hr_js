import { companySchema } from "./company";
import { userSchema } from "./user";
import { errorResponseSchema, errorBadRequestSchema } from "./error";
import { notificationSchema, createNotificationSchema } from "./notification";
import {
  loginAuthSchema,
  registerCompanyAuthSchema,
  registerEmployeeAuthSchema,
  tokenAuthSchema,
} from "./auth";

export const schemas = Object.assign(
  {},
  loginAuthSchema,
  registerCompanyAuthSchema,
  registerEmployeeAuthSchema,
  tokenAuthSchema,
  companySchema,
  errorBadRequestSchema,
  errorResponseSchema,
  userSchema,
  notificationSchema,
  createNotificationSchema
);
