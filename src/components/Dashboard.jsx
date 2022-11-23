import React, { useState } from "react";
import RightSidebar from "./RightSidebar";
import Sidebar from "./Sidebar";
import BlogPost from "./BlogPost";

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <div className="d-flex w-100">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <BlogPost openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        {/* <RightSidebar /> */}
      </div>
    </>
  );
};

export default Dashboard;
