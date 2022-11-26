import { registerCompanyAuth } from "./company";

export const registerAuth = {
  "/register/company": { post: registerCompanyAuth },
};
