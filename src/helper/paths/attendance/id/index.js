import { getAttendanceId } from "./get";
import { postAttendanceId } from "./post";

export const attendanceId = {
  get: getAttendanceId,
  post: postAttendanceId,
};
