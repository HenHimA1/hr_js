import { Router } from "express";

const CompanyGetIdRouter = Router();

/**
 * @swagger
 * /company/{companyId}:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
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
