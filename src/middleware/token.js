import { genSaltSync, hashSync } from "bcrypt";
import { verify } from "jsonwebtoken";

const AuthToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      res
        .status(401)
        .send({ status: "error", data: null, message: err.message });
    } else {
      req.user = user;
      next();
    }
  });
};

const genPassword = (passowrd) => {
  const Salt = genSaltSync(10);
  return hashSync(passowrd, Salt);
};

export { AuthToken, genPassword };
