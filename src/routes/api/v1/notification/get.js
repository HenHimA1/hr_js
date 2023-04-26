import { Router } from "express";
import { Notification } from "models";

const NotificationGetRouter = Router();

/**
 * @swagger
 * /notification:
 *   get:
 *     summary: Returns the list of the notifications
 *     tags: [Notification]
 *     responses:
 *       200:
 *         description: The list of the notifications
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Notification'
 */

NotificationGetRouter.get("", async (req, res) => {
  try {
    let domain = {};
    const { user_id } = req.query;
    if (user_id) {
      Object.assign(domain, { user_id: user_id });
    }
    const currentNotification = await Notification.find(domain);
    res.send({ status: "success", data: currentNotification });
  } catch (error) {
    res.send({ status: "error", data: null, message: error.message });
  }
});

export { NotificationGetRouter };
