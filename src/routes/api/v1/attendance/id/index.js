import { Router } from "express";
import { AttendanceGetIdRouter } from "./get";
import { AttendancePostIdRouter } from "./post";

const AttendanceIdRouter = Router();

AttendanceIdRouter.use("/:id", AttendanceGetIdRouter, AttendancePostIdRouter);

export { AttendanceIdRouter };
