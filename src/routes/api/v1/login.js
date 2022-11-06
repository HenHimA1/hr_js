import { Router } from "express";

const LoginRouter = Router();

LoginRouter.get("/login", async (req, res) => {
  res.send("OK");
});

export { LoginRouter };
