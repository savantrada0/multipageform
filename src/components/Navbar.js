import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Button } from "antd";
import "./style.css";

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="navbar_container">
        {location.pathname === "/" && <h1>Aimbrill Techinfo</h1>}
        {location.pathname === "/" && (
          <Link to="/employeedata">
            <Button type="primary">Employee List</Button>
          </Link>
        )}
        {location.pathname === "/employeedata" && (
          <Link to="/">
            <Button type="primary">Add Employee</Button>
          </Link>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
