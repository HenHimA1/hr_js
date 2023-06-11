import "dotenv/config";
import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import { serve, setup } from "swagger-ui-express";
import { swaggerDocs } from "./helper";
import { connectDatabase } from "./configs";
import { AppRouter } from "./routes";

const app = express();
const BASE_URL = process.env.BASE_URL;

connectDatabase()
  .then(() => {
    app.use(cors());
    app.use("/docs", serve, setup(swaggerDocs));
    app.use(json());
    app.use(urlencoded({ extended: true }));
    app.use(AppRouter);

    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at ${BASE_URL}`
      );
    });
  })
  .catch((error) => console.log(error));
