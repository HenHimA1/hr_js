import { getAttendance } from "./get";
import { postAttendance } from "./post";

const attendancePath = {
  "/attendance": { get: getAttendance, post: postAttendance },
};

export { attendancePath };
