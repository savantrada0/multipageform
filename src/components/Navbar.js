import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Button } from "antd";

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="navbar_container">
        <span>Aimbrill Techinfo</span>
        <Button type="primary">Employee List</Button>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
