import express, { Router } from "express";
import { ApiRouter } from "./api";
import { join } from "path";

const AppRouter = Router();

AppRouter.use("/", express.static(join(__dirname, '../../public/dist')))
AppRouter.use(ApiRouter);
AppRouter.use((req, res, next) => {
    res.status(400)

    if (req.accepts('html')) {
        res.redirect("/")
    }
})

export { AppRouter };
