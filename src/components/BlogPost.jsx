import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Header from "./common/Header";
import createPostImg from "../assets/images/svg/createpost.svg";
import { PlusIcon } from "./common/icon/icons";
import Home from "./Home";

const BlogPost = ({ openSidebar, setOpenSidebar }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="sidebar_margin_left w-100">
        <div className="container-fluid">
          <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
          <div className="post-show-box">
            <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
              <img
                className="create_post_img"
                src={createPostImg}
                alt="createPostImg"
              />
              <div className="pt-4 cursor-pointer" onClick={handleShow}>
                <PlusIcon />
                <span className="text-white ps-2 fw-bold raleway_font font_sm">
                  Create Post
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home show={show} handleClose={handleClose} />
    </>
  );
};

export default BlogPost;
