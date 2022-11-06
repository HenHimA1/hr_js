import { Schema, model } from "mongoose";

const AttendanceSchema = Schema({
  check_in: { required: true, type: Date, default: Date.now() },
  check_out: { type: Date },
  create_date: { type: Date, default: Date.now() },
  is_valid: { default: false, type: Boolean },
});

AttendanceSchema.set("id", false);
AttendanceSchema.set("toJSON", { virtuals: true, versionKey: false });
AttendanceSchema.set("toObject", { virtuals: true, versionKey: false });

const Attendance = model("attendance", AttendanceSchema);

export { Attendance, AttendanceSchema };