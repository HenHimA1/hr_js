import { Router } from "express";
import { User } from "../../../../../models";

const UserGetIdRouter = Router();

/**
 * @swagger
 * /user/{userId}:
 *   get:
 *     summary: Returns the list of user by id
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The list of user by id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

UserGetIdRouter.get("/:id", async (req, res) => {
  try {
    const currentUserId = await User.findById(req.params.id);
    res.send({ status: "success", data: currentUserId });
  } catch (error) {
    res
      .status(400)
      .send({ status: "error", data: null, message: error.message });
  }
});

export { UserGetIdRouter };
