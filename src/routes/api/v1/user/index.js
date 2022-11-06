import { Router } from "express";
import { UserIdRouter } from "./id";
import { UserGetRouter } from "./get";
import { UserPostRouter } from "./post";

const UserRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

UserRouter.use(
  "/user",
  UserIdRouter,
  UserGetRouter,
  UserPostRouter
);

export { UserRouter };
