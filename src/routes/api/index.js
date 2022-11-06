import { Router } from "express";
import { V1Router } from "./v1";

const ApiRouter = Router()

ApiRouter.use('/api',V1Router)

export { ApiRouter }