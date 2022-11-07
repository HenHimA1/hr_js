import { Router } from "express";
import { RegisterRoute } from "./register";
import { LoginRouter } from "./login";

const AuthRouter = Router();

AuthRouter.use("", RegisterRoute, LoginRouter);

export { AuthRouter };
