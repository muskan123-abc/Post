import React, { useState } from "react";
import Header from "./common/Header";
import Sidebar from "./Sidebar";

const MyPost = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="d-flex">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className="sidebar_margin_left w-100">
        <div className="container-fluid">
          <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
          <div className="post-show-box">
            <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
              <h1>ghjkl;''</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
