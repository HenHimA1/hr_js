import { Router } from "express";
import { CompanyGetIdRouter } from "./get";
import { CompanyPostIdRouter } from "./post";

const CompanyIdRouter = Router();

/**
 * @swagger
 * /company/:id:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Company]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Company'
 */

CompanyIdRouter.use("/:id", CompanyGetIdRouter, CompanyPostIdRouter);

export { CompanyIdRouter };
