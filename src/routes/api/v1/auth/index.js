import { Router } from "express";
import { RegisterRoute } from "./register";

const AuthRouter = Router();

AuthRouter.use("", RegisterRoute);

export { AuthRouter };
