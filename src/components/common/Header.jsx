import React from "react";
import { MenuIcon } from "./icon/icons";

const Header = ({ openSidebar, setOpenSidebar }) => {
  return (
    <div className="bg-white w-100">
      <div className=" d-flex justify-content-between align-items-center w-100">
        <div className="py-2 d-flex justify-content-between w-100 px-4">
          <span className="d-md-none" onClick={() => setOpenSidebar(true)}>
            {" "}
            <MenuIcon />
          </span>
          <div>Logo</div>
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
