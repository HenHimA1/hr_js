import { Router } from "express";

const AttendancePostIdRouter = Router();

/**
 * @swagger
 * /attendance/{attendanceId}:
 *   post:
 *     summary: Update the Attendance by Id
 *     tags: [Attendance]
 *     parameters:
 *       - in: path
 *         name: attendanceId
 *         schema:
 *           type: string
 *         required: true
 *         description: The Attendance by Id
 *     responses:
 *       200:
 *         description: The attendance
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
