import { Schema, model } from "mongoose";

const UserSchema = Schema({
  name: { required: [true, "Required name"], type: String },
  active: { default: false, type: Boolean },
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

UserSchema.set("id", false);
UserSchema.set("toJSON", { virtuals: true, versionKey: false });
UserSchema.set("toObject", { virtuals: true, versionKey: false });

const User = model("user", UserSchema);

export { User, UserSchema };
