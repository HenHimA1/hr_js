import moment from "moment";
import { Schema, model } from "mongoose";
import { AccessData } from "../data";

const AccessSchema = Schema({
  name: { required: true, type: String },
  create_date: { type: String },
});

AccessSchema.pre("validate", function (next) {
  if (this.isNew) {
    let currentTime = moment().format("HH:mm:ss DD-MM-YYYY");
    this.create_date = currentTime;
  }
  next();
});

AccessSchema.set("id", false);
AccessSchema.set("toJSON", { virtuals: true, versionKey: false });
AccessSchema.set("toObject", { virtuals: true, versionKey: false });

const Access = model("access", AccessSchema);

AccessData.map((record) =>
  Access.collection.findOneAndUpdate(
    { _id: record._id },
    {
      $setOnInsert: record,
    },
    { upsert: true }
  )
);

export { Access, AccessSchema };
