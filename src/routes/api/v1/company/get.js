import { Router } from "express";
import { Company } from "../../../../models";

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

CompanyGetRouter.get("", async (req, res) => {
  const currentCompany = await Company.find();
  res.send({ success: 1, data: currentCompany, error: null });
});

export { CompanyGetRouter };
