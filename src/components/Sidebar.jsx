import React, { useState, useEffect } from "react";
import Logo from "../assets/images/gif/logo.gif";
import { SidebarContent } from "./common/Content";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const pathname = window.location.pathname;

  let navigate = useNavigate();
  const [active, setActive] = useState("");
  const activeTabHandler = (value) => {
    setActive(value.pathname);
    navigate(value.pathname);
  };
  console.log(" active ", active);
  useEffect(() => {});

  return (
    <>
      <div className={`${openSidebar ? "sidebar_width" : ""} left-sidebar`}>
        <div
          onClick={() => setOpenSidebar(false)}
          className={`${openSidebar ? "overlay" : ""} cursor-pointer`}
        ></div>
        <span className="text-center d-inline-block">
          <img className="z-index logo_width" src={Logo} alt="" />
        </span>
        <ul className="list-unstyled mx-auto ms-lg-5 ps-lg-4 ">
          {SidebarContent.map((value, i) => {
            return (
              <li
                key={i}
                className={`${
                  value.pathname === active ? "fw-bold" : ""
                } py-3 cursor-pointer d-flex  justify-content-lg-start justify-content-center align-items-lg-center`}
                onClick={() => activeTabHandler(value)}
              >
                {value.img}
                <span className="d-lg-inline-block ms-2 d-none">
                  {value.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
