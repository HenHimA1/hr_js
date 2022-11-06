import { Router } from "express";

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

AttendancePostRouter.post("", (req, res) => {
  res.send("OK");
});

export { AttendancePostRouter };
