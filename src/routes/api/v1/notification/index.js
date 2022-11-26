import { Router } from "express";
import { NotificationGetRouter } from "./get";
import { NotificationPostRouter } from "./post";
import { NotificationIdRouter } from "./id";

const NotificationRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Notification:
 *       type: object
 *       properties:
 *         active:
 *           type: boolean
 *           description: Status notification
 *         _id:
 *           type: string
 *           description: The auto-generated id of the notification
 *         name:
 *           type: string
 *           description: The Notification name
 *         notification_type:
 *           type: string
 *           description: Type notification
 *         email:
 *           type: string
 *           description: The Notification email
 *         create_date:
 *           type: string
 *           description: The Notification create date
 *         company_id:
 *           type: string
 *           description: The Company Notification
 *       example:
 *         active: False
 *         _id: 636c5a78355d8f7946087eda
 *         name: Admin My Company
 *         notification_type: client
 *         email: admin@mycompany.com
 *         create_date: 08:57:12 10-11-2022
 *         company_id: 636c5a7c355d8f7946087edc
 */

NotificationRouter.use(
  "/notification",
  NotificationGetRouter,
  NotificationPostRouter,
  NotificationIdRouter
);

export { NotificationRouter };
