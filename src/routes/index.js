import { Router } from "express";
import { ApiRouter } from "./api";
import { join } from "path";

const AppRouter = Router();

AppRouter.get("/", function (req, res) {
  res.sendFile(join(__dirname, '../../public/index.html'))
});

AppRouter.use(ApiRouter);

export { AppRouter };
