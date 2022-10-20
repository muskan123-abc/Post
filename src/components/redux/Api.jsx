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
 * Login API
 * @param {Object} data
 * @returns
 */
export const LoginApi = async (data) => {
  return await axiosRequest("POST", `/login`, data);
};
/**
 * ME API
 * @param {Object} data
 * @returns
 */
export const MeApi = async () => {
  return await axiosRequest("GET", `/me`);
};
/**
 * CREATE POST
 * @param {Object} data
 * @returns
 */
export const CreatePostApi = async (data) => {
  return await axiosRequest("POST", `/create/post`, data);
};
