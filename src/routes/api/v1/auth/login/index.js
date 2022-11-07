import { Router } from "express";
import { User } from "../../../../../models";

const LoginRouter = Router();

/**
@swagger
 * components:
 *   schemas:
 *     UserToken:
 *       type: object
 *       required:
 *         - token
 *       properties:
 *         token:
 *           type: string
 *           description: User token
 *       example:
 *         token: mycompany
 */

/**
@swagger
 * components:
 *   schemas:
 *     LoginForm:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: Email User
 *         password:
 *           type: string
 *           description: Password User
 *       example:
 *         email: admin@mycompany.com
 *         password: mycompany
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       description: Optional description in Markdown
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/LoginForm"
 *         application/xml:
 *           schema:
 *             $ref: "#/components/schemas/LoginForm"
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: "#/components/schemas/LoginForm"
 *     responses:
 *       200:
 *         description: Token User
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/UserToken"
 */

LoginRouter.post("/login", async (req, res) => {
  try {
    const currentUser = await User.findOne({ email: req.body.email });
    if (currentUser) {
      res.send({ status: "success", data: currentUser });
    } else {
      throw { message: "Email not found" };
    }
  } catch (error) {
    res.send({ status: "error", data: null, message: error.message });
  }
});

export { LoginRouter };
