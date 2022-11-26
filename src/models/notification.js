import moment from "moment";
import { Schema, model } from "mongoose";

const NotificationSchema = Schema({
  title: { required: true, type: String },
  description: { required: true, type: String },
  user_id: { required: true, type: Schema.Types.ObjectId, ref: "user" },
  create_date: { type: String },
});

NotificationSchema.pre("save", function (next) {
  let currentTime = moment().format("HH:mm:ss DD-MM-YYYY");
  this.create_date = currentTime;
  next();
});

NotificationSchema.set("id", false);
NotificationSchema.set("toJSON", { virtuals: true, versionKey: false });
NotificationSchema.set("toObject", { virtuals: true, versionKey: false });

const Notification = model("notification", NotificationSchema);

export { Notification, NotificationSchema };
