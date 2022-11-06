import { Router } from "express";
import { AttendanceRouter } from "./attendance";
import { CompanyRouter } from "./company";

const V1Router = Router();

V1Router.use("/v1", AttendanceRouter, CompanyRouter);

export { V1Router };
