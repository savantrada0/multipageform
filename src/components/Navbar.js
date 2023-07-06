import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Button,Input } from "antd";
import "./style.css";

const {Search} = Input
const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div className="navbar_container">
        {location.pathname === "/" && <h1>Aimbrill Techinfo</h1>}
        {location.pathname === "/employeedata" && (
          <Search
          placeholder="Search"
          style={{
            width: 200,
          }}
        />
        )}
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
