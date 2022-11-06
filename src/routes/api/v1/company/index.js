import { Router } from "express";
import { CompanyIdRouter } from "./id";
import { CompanyGetRouter } from "./get";

const CompanyRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Company:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the company
 *         name:
 *           type: string
 *           description: The company name
 *         create_date:
 *           type: string
 *           description: The company create date
 *         create_uid:
 *           type: string
 *           description: The company create date
 *         code:
 *           type: string
 *           description: The company code
 *       example:
 *         _id: 636769bb39fc1194c690b1b4
 *         name: My Company
 *         create_date: Alexander K. Dewdney
 *         create_uid: 63676a36aa5b21b5248f5c46
 *         code: 636769bb39fc1194c690b1b4
 */

CompanyRouter.use("/company", CompanyIdRouter, CompanyGetRouter);

export { CompanyRouter };
