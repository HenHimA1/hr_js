import { getAttendance } from "./get";
import { postAttendance } from "./post";
import { attendanceId } from "./id";

const attendancePath = {
  "/attendance": { get: getAttendance, post: postAttendance },
  "/attendance/{attendanceId}": attendanceId,
};

export { attendancePath };
