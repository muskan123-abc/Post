import { axiosRequest } from "../common/helper";
/**
 * Login Api
 * @param {Object} data
 * @returns
 */
export const LoginApi = async (data) => {
  return await axiosRequest("POST", `login`, data);
};
