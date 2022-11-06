import { Router } from "express";
import { CompanyRegisterRouter } from "./company";
const RegisterRoute = Router();

RegisterRoute.use("/register", CompanyRegisterRouter);

export { RegisterRoute };
