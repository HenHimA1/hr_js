import { Router } from "express";

const CompanyPostRouter = Router();

/**
 * @swagger
 * /company:
 *   post:
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

CompanyPostRouter.post("", (req, res) => {
  res.send("OK");
});

export { CompanyPostRouter };
