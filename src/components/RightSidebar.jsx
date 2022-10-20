import React from "react";
import { Logout, NotificationIcon, SettingIcon } from "./common/icon/icons";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="d-flex justify-content-around align-items-center pt-3">
        <div className="icon-border">
          <SettingIcon />
        </div>
        <div className="icon-border">
          <Logout />
        </div>

        <div className="icon-border">
          <NotificationIcon />
        </div>

        <div className="icon-border">
          <Logout />
        </div>
      </div>
      <span className="border_bottom d-inline-block w-100"></span>
    </div>
  );
};

export default RightSidebar;
