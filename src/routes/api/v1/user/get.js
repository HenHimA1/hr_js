import { Router } from "express";
import { User } from "../../../../models";

const UserGetRouter = Router();

UserGetRouter.get("", async (req, res) => {
  try {
    let domain = {};
    const { company_id, active } = req.query;
    if (company_id) {
      Object.assign(domain, { company_id: company_id });
    }
    if (active !== undefined) {
      Object.assign(domain, { is_active: active });
    }
    const currentUser = await User.find(domain).select("-password");
    res.send({ status: "success", data: currentUser });
  } catch (error) {
    res.send({ status: "error", data: null, message: error.message });
  }
});

export { UserGetRouter };
