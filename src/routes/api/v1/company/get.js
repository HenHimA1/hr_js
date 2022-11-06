import { Router } from "express";

const CompanyGetRouter = Router();

/**
 * @swagger
 * /company:
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

CompanyGetRouter.get("", (req, res) => {
  res.send("OK");
});

export { CompanyGetRouter };
