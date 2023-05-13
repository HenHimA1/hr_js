import moment from "moment";
import { Schema, model } from "mongoose";
import { User } from "./user";

const AttendanceSchema = Schema({
  check_in: { required: true, type: String },
  check_out: { type: String },
  user_id: { required: true, type: Schema.Types.ObjectId, ref: "user" },
  create_date: { type: String },
  is_valid: { default: false, type: Boolean },
  latitude: { type: Number, require: true },
  longitude: { type: Number, require: true },
});

const getCurrentTime = () => moment().format("HH:mm:ss DD-MM-YYYY");

AttendanceSchema.pre("validate", async function (next) {
  let isUserExist = await User.exists({ _id: this.user_id });
  if (!isUserExist) next(new Error("User not found"));
  if (this.isNew) this.create_date = getCurrentTime();
  if (!this.latitude || !this.longitude)
    next(new Error("Position not defined"));
  next();
});

AttendanceSchema.set("id", false);
AttendanceSchema.set("toJSON", { virtuals: true, versionKey: false });
AttendanceSchema.set("toObject", { virtuals: true, versionKey: false });

const Attendance = model("attendance", AttendanceSchema);

export { Attendance, AttendanceSchema };
