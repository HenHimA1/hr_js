import { Router } from "express";
import { UserGetIdRouter } from "./get";
import { UserPostIdRouter } from "./post";

const UserIdRouter = Router();

UserIdRouter.use("/:id", UserGetIdRouter, UserPostIdRouter);

export { UserIdRouter };
