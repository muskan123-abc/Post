import React, { useState } from "react";
import SignupFormWrapper from "./common/hoc/SignupFormWrapper";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import LoginImg from "../assets/images/gif/login.gif";
import { HideEye, ShowEye } from "./common/icon/icons";
import { useNavigate } from "react-router-dom";
import { LoginAction } from "./redux/Action";
import Loader from "./common/Loader";

const Login = ({ passwordShowHide, setPasswordShowHide }) => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const LoginHandler = () => {
    if (email && password !== "" && emailRegex.test(email) !== false) {
      const data = {
        email: email,
        password: password,
      };
      dispatch(LoginAction(data, setLoading, navigate));
      setEmail("");
      setPassword("");
    }
  };
  return (
    <SignupFormWrapper>
      <div className="col-xl-6 col-lg-6 col-md-9 col-sm-10  my-lg-auto mt-3">
        <img className="w-100" src={LoginImg} alt="" />
      </div>
      <div className="col-xl-5 col-lg-6 col-md-9 col-sm-10 h-100 d-flex justify-content-lg-center  flex-column mt-lg-0 mt-5">
        <h1 className="sign_up_text raleway_font mb-2">Log In</h1>
        <Form.Control
          type="email"
          className="mt-3 py-sm-3 py-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="position-relative">
          <Form.Control
            type={passwordShowHide ? "text" : "password"}
            className="mt-3 py-sm-3 py-2"
            placeholder="Passsword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="position-absolute eye-icon"
            onClick={() => setPasswordShowHide(!passwordShowHide)}
          >
            {passwordShowHide ? <ShowEye /> : <HideEye />}
          </div>
        </div>
        <p
          className="mb-0 text-end pt-1 text_hover cursor-pointer"
          onClick={() => navigate("/forgot/password")}
        >
          Forgot Password
        </p>
        <button
          onClick={() => LoginHandler()}
          className={`${
            emailRegex.test(email) === false || (email && password === "")
              ? "not_allow"
              : "cursor-pointer"
          } mt-4 py-2 px-4 submit_btn`}
        >
          {loading ? <Loader /> : "Log In"}
        </button>
        <h1 className="sign_up_text raleway_font mb-3  font_xsm text-center pt-3">
          Already have not an account?
          <span
            className="d-inline-block ps-1 cursor-pointer text_hover"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </h1>
      </div>
    </SignupFormWrapper>
  );
};

export default Login;
