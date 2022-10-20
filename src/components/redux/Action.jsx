import Swal from "sweetalert2";
import { CreatePostApi, LoginApi, MeApi, SignUpApi } from "./Api";
export const LOGIN_SUCCESSFULLY = "LOGIN_SUCCESSFULLY";
export const SIGN_UP_SUCCESSFULLY = "SIGN_UP_SUCCESSFULLY";
export const CREATE_POST = "CREATE POST";

/**
 * Sign up action
 * @param {Object}
 * @returns
 */
export const SignUpSuccess = (data) => ({
  type: "SIGN_UP_SUCCESSFULLY",
  data,
});
export const SignUpAction =
  (data, navigate, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      setLoading(true);
      const response = await SignUpApi(data);
      if (response) {
        setLoading(false);
        localStorage.setItem("signupvalue", response.token);
        dispatch(SignUpSuccess(response));
        Swal.fire({
          icon: "success",
          title: "Great Successfully Sign Up",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/home");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

/**
 * login action
 * @param {Object}
 * @returns
 */
export const LoginSuccess = (data) => ({
  type: "LOGIN_SUCCESSFULLY",
  data,
});

export const LoginAction = (data, setLoading, navigate) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await LoginApi(data);
    if (response) {
      setLoading(false);
      dispatch(LoginSuccess);
      Swal.fire({
        icon: "success",
        title: "Great Successfully Login In",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/home");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
      });
    }
  } catch (error) {
    setLoading(false);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }
};
/**
 * ME ACTION
 * @param {Object}
 * @returns
 */
export const MeDataAction = () => async () => {
  try {
    const response = await MeApi();
    console.log("asdad", response);
  } catch (error) {}
};
/**
 * CREATE POST
 * @param {Object}
 * @returns
 */
export const PostCreate = (data) => ({
  type: "CREATE POST",
  data,
});
export const CreatePostAction =
  (data, setLoading, navigate) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await CreatePostApi(data);
      if (response) {
        dispatch(PostCreate(response));
        navigate("/postview");
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };
