import React, { useState } from "react";
import SignupFormWrapper from "./common/hoc/SignupFormWrapper";
import ForgotImg from "../assets/images/gif/forgot.gif";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const emailRegx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let navigate = useNavigate();

  const emailHandler = () => {
    if (email !== "" && emailRegx.test(email) !== false) {
      navigate(`/thanks${email}`);
    }
  };
  return (
    <SignupFormWrapper>
      <div className="col-xl-6 col-lg-6 col-md-9 col-sm-10  my-lg-auto mt-3">
        <img className="w-100" src={ForgotImg} alt="" />
      </div>
      <div className="col-xl-5 col-lg-6 col-md-9 col-sm-10 h-100 d-flex justify-content-lg-center  flex-column mt-lg-0 mt-5">
        <h1 className="sign_up_text raleway_font mb-2">Forgot Password</h1>
        <div className="position-relative">
          <Form.Control
            type="email"
            className="mt-3 py-sm-3 py-2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="position-absolute eye-icon"></div>
        </div>

        <button
          disabled={emailRegx.test(email) === false ? true : false}
          className={`${
            emailRegx.test(email) === false ? "not_allow" : ""
          } mt-4 py-2 px-4 submit_btn`}
          onClick={() => emailHandler()}
        >
          Submit
        </button>
      </div>
    </SignupFormWrapper>
  );
};

export default ForgotPassword;
