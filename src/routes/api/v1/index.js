import { Router } from "express";
import { AttendanceRouter } from "./attendance";
import { CompanyRouter } from "./company";
import { UserRouter } from "./user";
import { AuthRouter } from "./auth";

const V1Router = Router();

V1Router.use("/v1", AuthRouter, AttendanceRouter, CompanyRouter, UserRouter);

export { V1Router };
