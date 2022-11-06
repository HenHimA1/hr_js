import { Router } from "express";

const CompanyPostIdRouter = Router();

/**
 * @swagger
 * /company/:id:
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

CompanyPostIdRouter.post("/:id", (req, res) => {
  res.send("OK");
});

export { CompanyPostIdRouter };
