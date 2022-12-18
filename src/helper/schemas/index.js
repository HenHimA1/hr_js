import { companySchema } from "./company";
import { userSchema, updateUserSchema } from "./user";
import { errorResponseSchema, errorBadRequestSchema } from "./error";
import { attendanceSchema, createAttendanceSchema } from "./attendance";
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
  updateUserSchema,
  attendanceSchema,
  createAttendanceSchema,
  notificationSchema,
  createNotificationSchema
);
