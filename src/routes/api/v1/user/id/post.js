import { Router } from "express";
import { User } from "../../../../../models";

const UserPostIdRouter = Router();

UserPostIdRouter.post("/:id", async (req, res) => {
  try {
    const currentUserId = await User.findById(req.params.id);
    res.send({ status: "success", data: currentUserId });
  } catch (error) {
    res
      .status(400)
      .send({ status: "error", data: null, message: error.message });
  }
});

export { UserPostIdRouter };
