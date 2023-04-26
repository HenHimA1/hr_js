import { Router } from "express";
import { Attendance } from "models";

const AttendanceGetRouter = Router();

/**
 * @swagger
 * /attendance:
 *   get:
 *     summary: Returns the list of all the attendances
 *     tags: [Attendance]
 *     responses:
 *       200:
 *         description: The list of the attendances
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Attendance'
 */

AttendanceGetRouter.get("", async (req, res) => {
  const currentAttendance = await Attendance.find();
  res.send({ success: 1, data: currentAttendance, error: null });
});

export { AttendanceGetRouter };
