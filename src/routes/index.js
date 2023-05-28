import express, { Router } from "express";
import { ApiRouter } from "./api";
import { join } from "path";

const AppRouter = Router();

AppRouter.use("/", express.static(join(__dirname, '../../public')))
AppRouter.use(ApiRouter);

export { AppRouter };
