import { Router } from "express";
import { CompanyRegisterRouter } from "./company";
import { EmployeeRegisterRouter } from "./employee";

const RegisterRoute = Router();

RegisterRoute.use("/register", CompanyRegisterRouter, EmployeeRegisterRouter);

export { RegisterRoute };
