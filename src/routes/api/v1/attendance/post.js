import { Router } from "express";
import { Attendance } from "../../../../models";

const AttendancePostRouter = Router();

/**
 * @swagger
 * /attendance:
 *   post:
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

AttendancePostRouter.post("", async (req, res) => {
  const currentAttendance = Attendance.findById(req.params.id);
  res.send({ success: 1, data: currentAttendance, error: null });
});

export { AttendancePostRouter };
