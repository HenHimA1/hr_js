import { Router } from "express";
import { User } from "../../../../../models";

const UserGetIdRouter = Router();

/**
 * @swagger
 * /user/{userId}:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

UserGetIdRouter.get("/:id", async (req, res) => {
  const currentUser = await User.findById(req.params.id);
  res.send({ success: 1, data: currentUser, error: null });
});

export { UserGetIdRouter };
