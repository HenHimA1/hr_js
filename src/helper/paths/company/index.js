import { getCompany } from "./get";
import { companyId } from "./id";

export const companyPath = {
  "/company": { get: getCompany },
  "/company/{companyId}": companyId,
};
