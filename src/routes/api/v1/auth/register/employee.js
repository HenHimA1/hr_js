import { Router } from "express";
import { User } from "../../../../../models";

const EmployeeRegisterRouter = Router();

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
 *             $ref: "#/components/schemas/User"
 *         application/xml:
 *           schema:
 *             $ref: "#/components/schemas/User"
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: "#/components/schemas/User"
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
    const currentUser = await User.findById(req.params.id);
    res.send({ success: 1, data: currentUser, error: null });
  } catch (error) {
    res.send({ success: 0, data: { message: error.message }, error: 1 });
  }
});

export { EmployeeRegisterRouter };
