import React, { useState } from "react";
import SignupFormWrapper from "./common/hoc/SignupFormWrapper";
import Form from "react-bootstrap/Form";
import { HideEye, ShowEye } from "./common/icon/icons";
import ChangeImg from "../assets/images/gif/change.gif";
import { useNavigate } from "react-router-dom";
const ChangePassword = ({ history }) => {
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [newPasswordValue, setNewPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  let navigate = useNavigate();

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const passwordHandler = () => {
    if (
      newPasswordValue &&
      confirmPasswordValue !== "" &&
      passwordRegex.test(newPasswordValue) !== false &&
      passwordRegex.test(confirmPasswordValue) !== false
    ) {
      navigate("/home");
    }
  };

  return (
    <SignupFormWrapper>
      <div className="col-xl-6 col-lg-6 col-md-9 col-sm-10  my-lg-auto mt-3">
        <img className="w-100" src={ChangeImg} alt="" />
      </div>
      <div className="col-xl-5 col-lg-6 col-md-9 col-sm-10 h-100 d-flex justify-content-lg-center flex-column mt-lg-0 mt-5">
        <h1 className="sign_up_text raleway_font mb-2">Reset Password</h1>
        <div className="position-relative">
          <Form.Control
            type={newPassword ? "text" : "password"}
            className="mt-3 py-sm-3 py-2"
            placeholder="New Passsword"
            onChange={(e) => setNewPasswordValue(e.target.value)}
          />
          <div
            className="position-absolute eye-icon"
            onClick={() => setNewPassword(!newPassword)}
          >
            {newPassword ? <ShowEye /> : <HideEye />}
          </div>
        </div>
        <div className="position-relative">
          <Form.Control
            type={confirmPassword ? "text" : "password"}
            className="mt-3 py-sm-3 py-2"
            placeholder="Confirm Passsword"
            onChange={(e) => setConfirmPasswordValue(e.target.value)}
          />
          <div
            className="position-absolute eye-icon"
            onClick={() => setConfirmPassword(!confirmPassword)}
          >
            {confirmPassword ? <ShowEye /> : <HideEye />}
          </div>
        </div>

        <button
          className={`${
            newPasswordValue &&
            confirmPasswordValue !== "" &&
            passwordRegex.test(newPasswordValue) &&
            passwordRegex.test(confirmPasswordValue)
              ? "cursor-pointer"
              : " not_allow"
          } mt-4 py-2 px-4 submit_btn`}
          onClick={() => passwordHandler()}
        >
          Submit
        </button>
      </div>
    </SignupFormWrapper>
  );
};

export default ChangePassword;
