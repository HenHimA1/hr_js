import { Router } from "express";
import { Attendance } from "models";

const AttendancePostRouter = Router();

AttendancePostRouter.post("", async (req, res) => {
  try {
    const currentAttendance = await Attendance.create(Object.assign(req.body));
    res.send({ status: "success", data: currentAttendance });
  } catch (error) {
    res.send({ status: "error", data: null, message: error.message });
  }
});

export { AttendancePostRouter };
