import Axios from "axios";
export let SERVER_URL = "learn-nodebackend.herokuapp.com";
export let PUBLIC_URL = `https://${SERVER_URL}/api/v1`;
export async function axiosRequest(method, url, data = null) {
  try {
    const token = localStorage.getItem("signupvalue");
    let response = await Axios({
      method: method,
      url: `${PUBLIC_URL}${url}`,
      headers: {
        "x-access-token": token,
      },
      data: data,
    });
    return await response.data;
  } catch (error) {
    return error;
  }
}
