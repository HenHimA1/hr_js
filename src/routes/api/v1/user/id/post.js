import { Router } from "express";

const UserPostIdRouter = Router();

/**
 * @swagger
 * /user/{userId}:
 *   post:
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

UserPostIdRouter.post("/:id", (req, res) => {
  res.send("OK");
});

export { UserPostIdRouter };
