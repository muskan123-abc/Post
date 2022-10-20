import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import ChangePassword from "./components/ChangePassword";
import ErrorPage from "./components/ErrorPage";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import { MeDataAction } from "./components/redux/Action";
import SignUp from "./components/SignUp";
import Thanks from "./components/Thanks";
import Home from "./components/Home";
import PostView from "./components/PostView";
import Dashboard from "./components/Dashboard";

const Router = () => {
  const [passwordShowHide, setPasswordShowHide] = useState(false);
  const [confirmPasswordShowHide, setConfirmPasswordShowHide] = useState(false);
  const dispatch = useDispatch();

  const headers = {
    accessToken: localStorage.getItem("signupvalue"),
  };
  useEffect(() => {
    if (headers.accessToken) {
      dispatch(MeDataAction());
    }
  });
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              passwordShowHide={passwordShowHide}
              setPasswordShowHide={setPasswordShowHide}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              passwordShowHide={passwordShowHide}
              setPasswordShowHide={setPasswordShowHide}
              confirmPasswordShowHide={confirmPasswordShowHide}
              setConfirmPasswordShowHide={setConfirmPasswordShowHide}
            />
          }
        />
        <Route path="/forgot/password" element={<ForgotPassword />} />
        <Route
          path="/change/password"
          element={
            <ChangePassword
              passwordShowHide={passwordShowHide}
              setPasswordShowHide={setPasswordShowHide}
              confirmPasswordShowHide={confirmPasswordShowHide}
              setConfirmPasswordShowHide={setConfirmPasswordShowHide}
            />
          }
        />
        <Route path="/thanks:email" element={<Thanks />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/postview" element={<PostView />} />
      </Routes>
    </>
  );
};

export default Router;
