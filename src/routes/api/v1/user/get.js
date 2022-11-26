import { Router } from "express";
import { User } from "../../../../models";

const UserGetRouter = Router();

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Returns the list of the users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: The list of the users
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
 *                     $ref: '#/components/schemas/User'
 */

UserGetRouter.get("", async (req, res) => {
  try {
    let domain = {};
    const { company_id, active } = req.query;
    if (company_id) {
      Object.assign(domain, { company_id: company_id });
    }
    if (active !== undefined) {
      Object.assign(domain, { active: active  });
    }
    const currentUser = await User.find(domain).select("-password");
    res.send({ status: "success", data: currentUser });
  } catch (error) {
    res.send({ status: "error", data: null, message: error.message });
  }
});

export { UserGetRouter };
