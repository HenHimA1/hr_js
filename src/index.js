import "dotenv/config";
import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import { serve, setup } from "swagger-ui-express";
import { swaggerDocs } from "./helper";
import { connectDatabase } from "./configs";
import { AppRouter } from "./routes";

const app = express();
const port = process.env.PORT;

connectDatabase()
  .then(() => {
    // app.use(cors());
    app.use("/docs", serve, setup(swaggerDocs));
    app.use(json());
    app.use(urlencoded({ extended: true }));
    app.use(AppRouter);

    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    });
  })
  .catch((error) => console.log(error));
