import { Router } from "express";
import { genPassword } from "../../../../../middleware";
import { Company, User } from "../../../../../models";

const CompanyRegisterRouter = Router();

CompanyRegisterRouter.post("/company", async (req, res) => {
  try {
    const currentUser = await User.create({
      name: "Admin " + req.body.name,
      email: req.body.email,
      password: genPassword(req.body.password),
      access_ids: ["638c125f1475ff2911915b6a"],
    });
    const currentCompany = await Company.create({
      name: req.body.name,
      create_uid: currentUser._id,
    });
    await currentUser.updateOne({ company_id: currentCompany._id });
    res.send({
      status: "success",
      data: { message: "Waiting for confirmation" },
    });
  } catch (error) {
    if (error.code == 11000 && error.keyValue.email) {
      res
        .status(400)
        .send({ status: "error", data: null, message: "Email has already been taken" });
    } else {
      res
        .status(400)
        .send({ status: "error", data: null, message: error.message });
    }
  }
});

export { CompanyRegisterRouter };
