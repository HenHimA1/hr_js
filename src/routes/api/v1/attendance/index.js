import { Router } from "express";
import { AttendanceIdRouter } from "./id";
import { AttendanceGetRouter } from "./get";
import { AttendancePostRouter } from "./post";

const AttendanceRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Attendance:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

AttendanceRouter.use(
  "/attendance",
  AttendanceIdRouter,
  AttendanceGetRouter,
  AttendancePostRouter
);

export { AttendanceRouter };
