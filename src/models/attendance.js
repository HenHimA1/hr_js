import moment from "moment";
import { Schema, model } from "mongoose";
import { User } from "./user";
import { Company } from "./company";

const AttendanceSchema = Schema({
  check_in: { required: true, type: String },
  check_out: { type: String },
  user_id: { required: true, type: Schema.Types.ObjectId, ref: "user" },
  create_date: { type: String },
  is_valid: { default: false, type: Boolean },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

const getCurrentTime = () => moment().format("HH:mm:ss DD-MM-YYYY");

AttendanceSchema.pre("validate", async function (next) {
  const currentUser = await User.findOne({ _id: this.user_id });
  if (!currentUser) next(new Error("User not found"));
  const currentCompany = await Company.findOne({ _id: currentUser.company_id });
  if (!currentCompany.latitude || !currentCompany.longitude)
    next(new Error("Company position not defined"));
  if (this.isNew) this.create_date = getCurrentTime();
  next();
});

AttendanceSchema.set("id", false);
AttendanceSchema.set("toJSON", { virtuals: true, versionKey: false });
AttendanceSchema.set("toObject", { virtuals: true, versionKey: false });

const Attendance = model("attendance", AttendanceSchema);

export { Attendance, AttendanceSchema };
