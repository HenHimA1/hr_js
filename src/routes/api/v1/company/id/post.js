import { Router } from "express";
import { Company } from "models";

const CompanyPostIdRouter = Router();

/**
 * @swagger
 * /company/{companyId}:
 *   post:
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

CompanyPostIdRouter.post("/:id", async (req, res) => {
  try {
    const currentCompanyId = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after", runValidators: true }
    );
    res.send({ status: "success", data: currentCompanyId });
  } catch (error) {
    res
      .status(400)
      .send({ status: "error", data: null, message: error.message });
  }
});

export { CompanyPostIdRouter };
