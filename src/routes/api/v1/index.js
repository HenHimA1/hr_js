import { Router } from "express";
import { LoginRouter } from "./login";
import { AttendanceRouter } from "./attendance";
import { CompanyRouter } from "./company";

const V1Router = Router();

V1Router.use("/v1", LoginRouter, AttendanceRouter, CompanyRouter);

export { V1Router };
