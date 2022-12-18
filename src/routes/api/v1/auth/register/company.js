import { Router } from "express";
import { Company, User } from "../../../../../models";
import { genPassword } from "../../../../../middleware";

const CompanyRegisterRouter = Router();

CompanyRegisterRouter.post("/company", async (req, res) => {
  try {
    const currentUser = await User.create({
      name: "Admin " + req.body.name,
      email: req.body.email,
      password: req.body.password,
      access_ids: ["638c125f1475ff2911915b6a"],
    });
    const currentCompany = await Company.create({
      name: req.body.name,
      create_uid: currentUser._id,
    });
    await currentUser.updateOne({ company_id: currentCompany._id });
    res.send({ status: "success", data: currentCompany });
  } catch (error) {
    res
      .status(400)
      .send({ status: "error", data: null, message: error.message });
  }
});

export { CompanyRegisterRouter };
