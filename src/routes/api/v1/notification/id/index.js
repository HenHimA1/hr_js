import { Router } from "express";
import { NotificationGetIdRouter } from "./get";

const NotificationIdRouter = Router();

NotificationIdRouter.use("", NotificationGetIdRouter);

export { NotificationIdRouter };
