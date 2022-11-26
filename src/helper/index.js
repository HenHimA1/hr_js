import { schemas } from "./schemas";
import { paths } from "./paths";

const swaggerDocs = {
  openapi: "3.0.0",
  info: {
    title: "Human Resource APP",
    description: "",
    version: "1.0.0",
  },
  servers: [{ url: `${process.env.BASE_URL}/api/v1` }],
  tags: [
    { name: "Auth", description: "Authentication User" },
    { name: "User", description: "User routes" },
    { name: "Company", description: "Company routes" },
    { name: "Attendance", description: "Attendance routes" },
  ],
  components: {
    schemas: schemas,
    securitySchemes: {
      jwt: {
        type: "http",
        scheme: "bearer",
        in: "header",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      jwt: [],
    },
  ],
  paths: paths,
};

export { swaggerDocs };
