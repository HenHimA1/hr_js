import { loginAuth } from "./login";
import { registerAuth } from "./register";
import { confirmationAuth } from "./confirmation";

export const authPath = Object.assign(
  { "/login": { post: loginAuth } },
  registerAuth,
  { "/confirmation": { post: confirmationAuth } }
);
