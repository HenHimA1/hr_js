import { Router } from "express";
import { compPassword, genToken } from "middleware";
import { User } from "models";

const LoginRouter = Router();

/**
@swagger
 * components:
 *   schemas:
 *     UserToken:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: success
 *         data:
 *           type: object
 *           properties:
 *             token:
 *               type: string
 *           example:
 *             token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwiZW1haWwiOiJpbml0IiwidXNlcl90eXBlIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCIsImNyZWF0ZV9kYXRlIjoiaW5pdCIsIl9fdiI6ImluaXQiLCJjb21wYW55X2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsicmVxdWlyZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9pZCI6dHJ1ZSwibmFtZSI6dHJ1ZSwidXNlcl90eXBlIjp0cnVlLCJlbWFpbCI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsImNyZWF0ZV9kYXRlIjp0cnVlLCJfX3YiOnRydWUsImNvbXBhbnlfaWQiOnRydWV9fX0sInNraXBJZCI6dHJ1ZX0sIiRpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX2lkIjoiNjM2YzVhNzgzNTVkOGY3OTQ2MDg3ZWRhIiwibmFtZSI6IkFkbWluIE15IENvbXBhbnkiLCJ1c2VyX3R5cGUiOiJjbGllbnQiLCJlbWFpbCI6ImFkbWluQG15Y29tcGFueS5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQ2MmVEZ3pxSmpjMFdHTkI3UmcxeUouYVVSUUpsUVlXOEhNQWJXbTNIeGk1QVJ5ZmV0VlVETyIsImNyZWF0ZV9kYXRlIjoiMDg6NTc6MTIgMTAtMTEtMjAyMiIsIl9fdiI6MCwiY29tcGFueV9pZCI6IjYzNmM1YTdjMzU1ZDhmNzk0NjA4N2VkYyJ9LCJpYXQiOjE2NjgwNDU4MDQsImV4cCI6MTY2ODIxODYwNH0.kxAOFSHjzt2Kq84KiLXttH9HLb9j0W2Q_07UUFiu1IU
 *
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
    if (!currentUser) throw { message: "Email not found" };
    if (!compPassword(req.body.password, currentUser.password)) {
      throw { message: "Password wrong" };
    }
    if (!currentUser.is_active) throw { message: "Waiting for confirmation" };
    const token = genToken(currentUser);
    res.send({ status: "success", data: { token: token } });
  } catch (error) {
    res
      .status(400)
      .send({ status: "error", data: null, message: error.message });
  }
});

export { LoginRouter };
