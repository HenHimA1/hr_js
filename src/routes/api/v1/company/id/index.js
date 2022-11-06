import { Router } from "express";
import { CompanyGetIdRouter } from "./get";
import { CompanyPostIdRouter } from "./post";

const CompanyIdRouter = Router();

CompanyIdRouter.use("/:id", CompanyGetIdRouter, CompanyPostIdRouter);

export { CompanyIdRouter };
