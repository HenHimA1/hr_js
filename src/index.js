import "dotenv/config";
import express from "express";
import { json, urlencoded } from "body-parser";
import { serve, setup } from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { connectDatabase } from "./configs";
import { AppRouter } from "./routes";

const app = express();
const port = process.env.PORT;

const options = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My Presensi API",
      version: "1.0.1",
      description: "A simple Express Library API",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
      },
    ],
  },
  apis: [__dirname + "/routes/**/*.js"],
});

connectDatabase()
  .then(() => {
    app.use("/docs", serve, setup(options));
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
