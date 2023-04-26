import { Router } from "express";
import { Company, User } from "models";

const EmployeeRegisterRouter = Router();

/**
@swagger
 * components:
 *   schemas:
 *     EmployeeRegisterForm:
 *       type: object
 *       required:
 *         - name
 *         - company_code
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: Employee Name
 *         company_code:
 *           type: string
 *           description: Company Code
 *         email:
 *           type: string
 *           description: Employee Email
 *         password:
 *           type: string
 *           description: Employee Password
 *       example:
 *         name: Doe
 *         company_code: 1845F4166D5
 *         email: doe@mycompany.com
 *         password: doe
 */

/**
 * @swagger
 * /register/employee:
 *   post:
 *     summary: Returns the list of all the books
 *     tags: [Auth]
 *     requestBody:
 *       description: Optional description in Markdown
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/EmployeeRegisterForm"
 *         application/xml:
 *           schema:
 *             $ref: "#/components/schemas/EmployeeRegisterForm"
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: "#/components/schemas/EmployeeRegisterForm"
 *         text/plain:
 *           schema:
 *             type: string
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

EmployeeRegisterRouter.post("/employee", async (req, res) => {
  try {
    const currentCompany = await Company.findOne({
      code: req.body.company_code,
    });
    if (!currentCompany) throw { message: "Company code not found" };
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: genPassword(req.body.password),
      company_id: currentCompany._id,
    });
    res.send({
      status: "success",
      data: { message: "Waiting for confirmation" },
    });
  } catch (error) {
    res
      .status(400)
      .send({ status: "error", data: null, message: error.message });
  }
});

export { EmployeeRegisterRouter };
