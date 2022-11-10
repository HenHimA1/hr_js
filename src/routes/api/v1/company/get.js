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
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Company'
 *
 */

CompanyGetRouter.get("", async (req, res) => {
  try {
    const currentCompany = await Company.find();
    res.send({ status: "success", data: currentCompany });
  } catch (error) {
    res.send({ status: "success", data: null, message: error.message });
  }
});

export { CompanyGetRouter };
