import { Router } from "express";

const AttendancePostIdRouter = Router();

/**
 * @swagger
 * /attendance/{attendanceId}:
 *   post:
 *     summary: Returns the list of all the books
 *     tags: [Attendance]
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
 *                 $ref: '#/components/schemas/Attendance'
 */

AttendancePostIdRouter.post("", (req, res) => {
  res.send("OK");
});

export { AttendancePostIdRouter };
