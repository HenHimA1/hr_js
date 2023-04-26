import moment from "moment";
import { Schema, model } from "mongoose";

const CompanySchema = Schema({
  active: { default: false, type: Boolean },
  name: { required: true, type: String },
  create_date: { type: String },
  create_uid: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  code: {
    required: true,
    type: String,
    unique: true,
  },
  latitude: { type: Number },
  longitude: { type: Number },
});

CompanySchema.virtual("user_ids", {
  ref: "user",
  localField: "_id",
  foreignField: "company_id",
});

CompanySchema.pre("validate", function (next) {
  if (this.isNew) {
    let currentTime = moment().format("HH:mm:ss DD-MM-YYYY");
    let currentCode = moment.now().toString(16).toUpperCase();
    this.create_date = currentTime;
    this.code = currentCode;
  }
  next();
});

CompanySchema.set("id", false);
CompanySchema.set("toJSON", { virtuals: true, versionKey: false });
CompanySchema.set("toObject", { virtuals: true, versionKey: false });

const Company = model("company", CompanySchema);

export { Company, CompanySchema };
