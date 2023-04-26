import moment from "moment";
import { Schema, model } from "mongoose";
import { genPassword } from "../middleware";

const UserSchema = Schema({
  is_active: { default: false, type: Boolean },
  access_ids: [
    {
      type: Schema.Types.ObjectId,
      ref: "access",
    },
  ],
  name: { required: [true, "Required name"], type: String },
  company_id: {
    type: Schema.Types.ObjectId,
    ref: "company",
  },
  user_type: {
    required: [true, "Required user type"],
    type: String,
    enum: {
      values: ["client", "admin", "superadmin"],
      message: "{VALUE} is not supported",
    },
    default: "client",
  },
  email: {
    required: [true, "Required email"],
    type: String,
    lowercase: true,
    unique: true,
  },
  password: { required: true, type: String },
  create_date: { type: String },
});

UserSchema.pre("validate", function (next) {
  if (this.isNew) {
    let currentTime = moment().format("HH:mm:ss DD-MM-YYYY");
    this.create_date = currentTime;
  }
  next();
});

UserSchema.set("id", false);
UserSchema.set("toJSON", { virtuals: true, versionKey: false });
UserSchema.set("toObject", { virtuals: true, versionKey: false });

const User = model("user", UserSchema);

export { User, UserSchema };
