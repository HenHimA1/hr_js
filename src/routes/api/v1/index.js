import { Router } from "express";
import { AttendanceRouter } from "./attendance";
import { CompanyRouter } from "./company";
import { AuthRouter } from "./auth";

const V1Router = Router();

V1Router.use("/v1", AuthRouter, AttendanceRouter, CompanyRouter);

export { V1Router };
