import { registerCompanyAuth } from "./company";
import { registerEmployeeAuth } from "./employee";

export const registerAuth = {
  "/register/company": { post: registerCompanyAuth },
  "/register/employee": { post: registerEmployeeAuth },
};
