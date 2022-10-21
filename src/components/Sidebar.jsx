import React from "react";
import Logo from "../assets/images/gif/logo.gif";
import { MenuIcon, MyFriendPost, MyPost } from "./common/icon/icons";

const Sidebar = () => {
  return (
    <>
      <div className="left-sidebar">
        <div className="text-center">
          <img className="z-index" src={Logo} alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <MenuIcon />
        </div>
        <div className="d-flex justify-content-center">
          <p className=" cursor-pointer">
            <span className="icon-border d-inline-block">
              <MyPost />
            </span>
            My Post
          </p>
        </div>
        <div>
          <p className=" py-3 d-flex justify-content-center cursor-pointer">
            {" "}
            <span className="icon-border d-inline-block">
              <MyFriendPost />
            </span>
            Friend Post
          </p>
        </div>
        <div>
          <p className="d-flex justify-content-center py-3  cursor-pointer">
            {" "}
            <span className="icon-border d-inline-block">
              <MyFriendPost />
            </span>
            Friend Post
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
