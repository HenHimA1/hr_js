import { Router } from "express";

const AttendanceGetRouter = Router();

/**
 * @swagger
 * /attendance:
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

AttendanceGetRouter.get("", (req, res) => {
  res.send("OK");
});

export { AttendanceGetRouter };
