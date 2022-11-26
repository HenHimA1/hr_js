import { Router } from "express";
import { Notification } from "../../../../../models";

const NotificationGetIdRouter = Router();

/**
 * @swagger
 * /notification/{notificationId}:
 *   get:
 *     summary: Returns the list of notification by id
 *     tags: [Notification]
 *     parameters:
 *       - in: path
 *         name: notificationId
 *         schema:
 *           type: string
 *         required: true
 *         description: The notification id
 *     responses:
 *       200:
 *         description: The list of notification by id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Notification'
 */

NotificationGetIdRouter.get("/:id", async (req, res) => {
  try {
    const currentNotificationId = await Notification.findById(req.params.id);
    res.send({ status: "success", data: currentNotificationId });
  } catch (error) {
    res
      .status(400)
      .send({ status: "error", data: null, message: error.message });
  }
});

export { NotificationGetIdRouter };
