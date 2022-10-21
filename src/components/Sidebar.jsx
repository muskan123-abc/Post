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
<<<<<<< HEAD
        <ul className="list-unstyled mx-auto ms-5">
          <li className="cursor-pointer">Friends</li>
          <li className="py-3">My Wall</li>
          <li>Public Tables</li>
          <li className="py-3">Discover</li>
          <li>Groups</li>
        </ul>
=======
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
>>>>>>> 4ee842d2811a5b6ca826c6791e1f6fde1a8a66f4
      </div>
    </>
  );
};

export default Sidebar;
