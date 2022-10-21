import React from "react";
import Logo from "../assets/images/gif/logo.gif";

const Sidebar = () => {
  return (
    <>
      <div className="left-sidebar">
        <div className="text-center">
          <img className="z-index" src={Logo} alt="" />
        </div>
        <ul className="list-unstyled mx-auto ms-5">
          <li className="cursor-pointer">Friends</li>
          <li className="py-3">My Wall</li>
          <li>Public Tables</li>
          <li className="py-3">Discover</li>
          <li>Groups</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
