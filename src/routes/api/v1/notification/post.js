import { Router } from "express";
import { Notification } from "models";

const NotificationPostRouter = Router();

NotificationPostRouter.post("", async (req, res) => {
  try {
    const currentNotification = await Notification.create(Object.assign(req.body));
    res.send({ status: "success", data: currentNotification });
  } catch (error) {
    res.send({ status: "error", data: null, message: error.message });
  }
});

export { NotificationPostRouter };
