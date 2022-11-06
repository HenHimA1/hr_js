import { Router } from "express";

const CompanyGetIdRouter = Router();

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

CompanyGetIdRouter.get("/:id", (req, res) => {
  res.send("OK");
});

export { CompanyGetIdRouter };
