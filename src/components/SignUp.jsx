import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignUpImg from "../assets/images/gif/sign.gif";
import SignupFormWrapper from "./common/hoc/SignupFormWrapper";
import { HideEye, ShowEye } from "./common/icon/icons";
import Loader from "./common/Loader";
import { SignUpAction } from "./redux/Action";

const SignUp = ({
  history,
  setConfirmPasswordShowHide,
  confirmPasswordShowHide,
  passwordShowHide,
  setPasswordShowHide,
}) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const storageValue = localStorage.getItem("signupvalue");
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const isEnabled =
    formData.firstname.length > 0 &&
    formData.lastname.length > 0 &&
    formData.email.length > 0 &&
    formData.phone.length === 10 &&
    emailRegex.test(formData.email) !== false &&
    formData.password.length > 0 &&
    formData.confirmpassword.length > 0 &&
    formData.password === formData.confirmpassword;

  const formHandler = () => {
    let data = {
      firstName: formData.firstname,
      lastName: formData.lastname,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
    };
    if (
      formData.firstname &&
      formData.phone &&
      formData.lastname &&
      formData.email &&
      emailRegex.test(formData.email) !== false &&
      passwordRegex.test(formData.password) !== false &&
      formData.password &&
      formData.phone.length === 10 &&
      formData.confirmpassword !== "" &&
      formData.password === formData.confirmpassword
    ) {
      dispatch(SignUpAction(data, navigate, setLoading));
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        phone: "",
      });
    }
  };
  useEffect(() => {
    if (storageValue) {
      navigate("/");
    }
  }, [storageValue, navigate]);
  console.log(" formData.phone", formData.phone.length);
  return (
    <SignupFormWrapper>
      <div className="col-xl-6 col-lg-6 col-md-10  my-lg-auto mt-3">
        <img className="w-100" src={SignUpImg} alt="" />
      </div>
      <div className="col-xl-5 col-lg-6 col-md-10 h-100 d-flex justify-content-lg-center  flex-column mt-lg-0 mt-4">
        <h1 className="sign_up_text raleway_font mb-2">Sign Up</h1>
        <Form.Control
          type="text"
          className="mt-3 py-sm-3 py-2"
          onChange={(e) =>
            setFormData({
              ...formData,
              firstname: e.target.value,
            })
          }
          value={formData.firstname}
          placeholder="First Name"
        />{" "}
        <Form.Control
          type="text"
          className="mt-3 py-sm-3 py-2"
          onChange={(e) =>
            setFormData({
              ...formData,
              lastname: e.target.value,
            })
          }
          value={formData.lastname}
          placeholder="Last Name"
        />{" "}
        <Form.Control
          type="email"
          className="mt-3 py-sm-3 py-2"
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          value={formData.email}
          placeholder="Email"
        />{" "}
        <Form.Control
          type="number"
          className="mt-3 py-sm-3 py-2"
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
          value={formData.phone}
          placeholder="Phone"
        />{" "}
        <div className="position-relative">
          <Form.Control
            type={passwordShowHide ? "text" : "password"}
            className="mt-3 py-sm-3 py-2"
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            value={formData.password}
            placeholder="Passsword"
          />
          <div
            className="position-absolute eye-icon"
            onClick={() => setPasswordShowHide(!passwordShowHide)}
          >
            {passwordShowHide ? <ShowEye /> : <HideEye />}
          </div>
        </div>
        <div className="position-relative">
          <Form.Control
            type={confirmPasswordShowHide ? "text" : "password"}
            className="mt-3 py-sm-3 py-2"
            onChange={(e) =>
              setFormData({
                ...formData,
                confirmpassword: e.target.value,
              })
            }
            value={formData.confirmpassword}
            placeholder="Confirm Passsword"
          />
          <div
            className="position-absolute eye-icon"
            onClick={() => setConfirmPasswordShowHide(!confirmPasswordShowHide)}
          >
            {confirmPasswordShowHide ? <ShowEye /> : <HideEye />}
          </div>
        </div>
        <button
          disabled={!isEnabled}
          className={`${
            isEnabled ? "" : "not_allow"
          } mt-4 py-2 px-4 submit_btn`}
          onClick={() => formHandler()}
        >
          {loading ? <Loader /> : " Sign Up"}
        </button>
        <h1 className="sign_up_text raleway_font mb-3  font_xsm text-center pt-3">
          Already have an account?
          <span
            className="d-inline-block ps-1 cursor-pointer text_hover"
            onClick={() => navigate("/")}
          >
            Log In
          </span>
        </h1>
      </div>
    </SignupFormWrapper>
  );
};

export default SignUp;
