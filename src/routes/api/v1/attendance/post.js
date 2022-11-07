import { Router } from "express";
import { Attendance } from "../../../../models";

const AttendancePostRouter = Router();

/**
 * @swagger
 * /attendance:
 *   post:
 *     summary: Create the attendances
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

AttendancePostRouter.post("", async (req, res) => {
  const currentAttendance = Attendance.findById(req.params.id);
  res.send({ success: 1, data: currentAttendance, error: null });
});

export { AttendancePostRouter };
