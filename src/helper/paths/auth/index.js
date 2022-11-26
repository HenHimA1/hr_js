import { loginAuth } from "./login";
import { registerAuth } from "./register";

export const authPath = Object.assign(
  { "/login": { post: loginAuth } },
  registerAuth
);
