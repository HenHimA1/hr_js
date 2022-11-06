import { Router } from "express";

const AttendanceIdRouter = Router();

/**
 * @swagger
 * /attendance/:id:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Attendance]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Attendance'
 */

AttendanceIdRouter.get("/:id", (req, res) => {
  res.send("OK");
});

export { AttendanceIdRouter };
