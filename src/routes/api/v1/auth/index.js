import { Router } from "express";
import { RegisterRoute } from "./register";
import { LoginRouter } from "./login";
import { ConfirmationRouter } from "./confirmation";

const AuthRouter = Router();

AuthRouter.use("", RegisterRoute, LoginRouter, ConfirmationRouter);

export { AuthRouter };
