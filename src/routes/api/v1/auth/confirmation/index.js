import { Router } from "express";
import { User } from "../../../../../models";

const ConfirmationRouter = Router();

ConfirmationRouter.post("/confirmation", async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { email: req.body.email },
      { is_active: true },
      {
        returnDocument: "after",
        runValidators: true,
      }
    );
    res.send({
      status: "success",
      data: { message: "Email activate" },
    });
  } catch (error) {
    res
      .status(400)
      .send({ status: "error", data: null, message: error.message });
  }
});

export { ConfirmationRouter };
