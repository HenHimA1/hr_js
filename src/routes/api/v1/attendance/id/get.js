import { Router } from "express";
import { Attendance } from "../../../../../models";

const AttendanceGetIdRouter = Router();

/**
 * @swagger
 * /attendance/{attendanceId}:
 *   get:
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

AttendanceGetIdRouter.get("", async (req, res) => {
  try {
    const currentAttendance = await Attendance.findById(req.params.id);
    res.send({ success: 1, data: currentAttendance, error: null });
  } catch (error) {
    res.send({ success: 0, data: { message: error.message }, error: 1 });
  }
});

export { AttendanceGetIdRouter };
