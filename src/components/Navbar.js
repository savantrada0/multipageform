import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Button } from "antd";
import "./style.css";

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="navbar_container">
        <h1>Aimbrill Techinfo</h1>
        <Button type="primary">Employee List</Button>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
