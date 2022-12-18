import { Router } from "express";
import { AuthToken } from "../../../../../middleware";
import { User } from "../../../../../models";

const UserPostIdRouter = Router();

UserPostIdRouter.post("/:id", AuthToken, async (req, res) => {
  try {
    const currentUserId = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after", runValidators: true }
    );
    res.send({ status: "success", data: currentUserId });
  } catch (error) {
    res
      .status(400)
      .send({ status: "error", data: null, message: error.message });
  }
});

export { UserPostIdRouter };
