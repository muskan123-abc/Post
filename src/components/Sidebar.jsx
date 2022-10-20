import React from "react";
import Logo from "../assets/images/gif/logo.gif";

const Sidebar = () => {
  return (
    <>
      <div className="left-sidebar">
        <div className="text-center">
          <img className="z-index" src={Logo} alt="" />
        </div>
        <h1>hello world</h1>
      </div>
    </>
  );
};

export default Sidebar;
