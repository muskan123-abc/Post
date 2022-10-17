import React from "react";

const SignupFormWrapper = ({ children }) => {
  return (
    <div className="d-flex justify-content-center align-items-center container h-100">
      <div className="row justify-content-xl-between justify-content-center height_100  w-100 ms-0">
        {children}
      </div>
    </div>
  );
};

export default SignupFormWrapper;
