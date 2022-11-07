import { Router } from "express";
import { CompanyGetIdRouter } from "./get";
import { CompanyPostIdRouter } from "./post";

const CompanyIdRouter = Router();

CompanyIdRouter.use("", CompanyGetIdRouter, CompanyPostIdRouter);

export { CompanyIdRouter };
