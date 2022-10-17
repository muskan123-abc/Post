import React from "react";
import { useNavigate } from "react-router-dom";
import ThanksImg from "../assets/images/gif/thanks.gif";

const Thanks = () => {
  let navigate = useNavigate();
  return (
    <div className="container h-100">
      <div className="row justify-content-center h-100 align-items-center">
        <div className="col-lg-5 col-md-7 col-sm-9">
          <img className="w-100" src={ThanksImg} alt="" />
          <button
            className=" py-2 px-4 submit_btn w-100"
            onClick={() => navigate("/change/password")}
          >
            Check Email{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
