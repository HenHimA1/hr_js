import { Router } from "express";
import { Company, User } from "../../../../../models";
import { genPassword } from "../../../../../middleware";

const CompanyRegisterRouter = Router();

/**
@swagger
 * components:
 *   schemas:
 *     CompanyRegisterForm:
 *       type: object
 *       required:
 *         - company_name
 *         - email
 *         - password
 *       properties:
 *         company_name:
 *           type: string
 *           description: Company Name
 *         email:
 *           type: string
 *           description: Company Email
 *         password:
 *           type: string
 *           description: Company Password
 *       example:
 *         company_name: My Company
 *         email: admin@mycompany.com
 *         password: mycompany
 */

/**
 * @swagger
 * /register/company:
 *   post:
 *     summary: Register as company
 *     tags: [Auth]
 *     requestBody:
 *       description: Optional description in Markdown
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CompanyRegisterForm"
 *         application/xml:
 *           schema:
 *             $ref: "#/components/schemas/CompanyRegisterForm"
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: "#/components/schemas/CompanyRegisterForm"
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/User"
 */

CompanyRegisterRouter.post("/company", async (req, res) => {
  try {
    const currentUser = await User.create({
      name: "Admin " + req.body.name,
      email: req.body.email,
      password: genPassword(req.body.password),
    });
    const currentCompany = await Company.create({
      name: req.body.name,
      create_uid: currentUser._id,
    })
    res.send({ status: "success", data: currentCompany });
  } catch (error) {
    res
      .status(400)
      .send({ status: "error", data: null, message: error.message });
  }
});

export { CompanyRegisterRouter };
