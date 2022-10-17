import { axiosRequest } from "../common/helper";
/**
 * SignUp Api
 * @param {Object} data
 * @returns
 */
export const SignUpApi = async (data) => {
  return await axiosRequest("POST", `/signup`, data);
};
/**
 *
 * @param {Object} data
 * @returns
 */
export const LoginApi = async (data) => {
  return await axiosRequest("POST", `/login`, data);
};
export const MeApi = async () => {
  return await axiosRequest("GET", `/me`);
};
