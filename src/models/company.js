import { Schema, model } from "mongoose";

const CompanySchema = Schema({
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
});

CompanySchema.virtual("user_ids", {
  ref: "user",
  localField: "_id",
  foreignField: "company_id",
});

CompanySchema.set("id", false);
CompanySchema.set("toJSON", { virtuals: true, versionKey: false });
CompanySchema.set("toObject", { virtuals: true, versionKey: false });

const Company = model("company", CompanySchema);

export { Company, CompanySchema };
