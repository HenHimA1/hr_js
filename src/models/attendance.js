import moment from "moment";
import { Schema, model } from "mongoose";

const AttendanceSchema = Schema({
  check_in: { required: true, type: Date, default: Date.now() },
  check_out: { type: Date },
  user_id: { required: true, type: Schema.Types.ObjectId, ref: "user" },
  create_date: { type: String },
  is_valid: { default: false, type: Boolean },
});

AttendanceSchema.pre("save", function (next) {
  let currentTime = moment().format("HH:mm:ss DD-MM-YYYY");
  this.create_date = currentTime;
  next();
});

AttendanceSchema.set("id", false);
AttendanceSchema.set("toJSON", { virtuals: true, versionKey: false });
AttendanceSchema.set("toObject", { virtuals: true, versionKey: false });

const Attendance = model("attendance", AttendanceSchema);

export { Attendance, AttendanceSchema };
