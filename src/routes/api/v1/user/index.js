import { Router } from "express";
import { UserIdRouter } from "./id";
import { UserGetRouter } from "./get";

const UserRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         active:
 *           type: boolean
 *           description: Status user
 *         _id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The User name
 *         user_type:
 *           type: string
 *           description: Type user
 *         email:
 *           type: string
 *           description: The User email
 *         create_date:
 *           type: string
 *           description: The User create date
 *         company_id:
 *           type: string
 *           description: The Company User
 *       example:
 *         active: False
 *         _id: 636c5a78355d8f7946087eda
 *         name: Admin My Company
 *         user_type: client
 *         email: admin@mycompany.com
 *         create_date: 08:57:12 10-11-2022
 *         company_id: 636c5a7c355d8f7946087edc
 */

UserRouter.use(
  "/user",
  UserIdRouter,
  UserGetRouter,
);

export { UserRouter };
