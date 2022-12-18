import { genSaltSync, hashSync, compareSync } from "bcrypt";
import { verify, sign } from "jsonwebtoken";

export const AuthToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  verify(token, process.env.SECRET_TOKEN, (err, user) => {
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

export const genPassword = (password) => {
  const Salt = genSaltSync(10);
  return password && hashSync(password, Salt);
};

export const genToken = (data) => {
  return sign(Object.assign({}, data), process.env.SECRET_TOKEN, {
    expiresIn: "2 days",
  });
};

export const compPassword = (password, confirmPassword) => {
  return compareSync(password, confirmPassword);
};
