import { Router } from "express";

const UserGetRouter = Router();

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [User]
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

UserGetRouter.get("", (req, res) => {
  res.send("OK");
});

export { UserGetRouter };
