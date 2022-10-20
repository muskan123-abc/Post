import React from "react";
import RightSidebar from "./RightSidebar";
import Sidebar from "./Sidebar";
import BlogPost from "./BlogPost";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <BlogPost />
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
