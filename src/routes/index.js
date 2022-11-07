import { Router } from "express";
import { ApiRouter } from "./api";

const AppRouter = Router();

AppRouter.get("/", function (req, res) {
  res.redirect("/docs");
});

AppRouter.use(ApiRouter);

export { AppRouter };
