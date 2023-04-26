import { Router } from "express";
import { Company } from "models";

const CompanyGetIdRouter = Router();

/**
 * @swagger
 * /company/{companyId}:
 *   get:
 *     summary: Returns the list of all the companies
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: companyId
 *         schema:
 *           type: string
 *         required: true
 *         description: The company id
 *     responses:
 *       200:
 *         description: The list of the companies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Company'
 */

CompanyGetIdRouter.get("/:id", async (req, res) => {
  try {
    const currentCompanyId = await Company.findById(req.params.id);
    res.send({ status: "success", data: currentCompanyId });
  } catch (error) {
    res
      .status(400)
      .send({ status: "error", data: null, message: error.message });
  }
});

export { CompanyGetIdRouter };
