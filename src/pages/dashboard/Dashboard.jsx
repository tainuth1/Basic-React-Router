import React from "react";
import "./dashboard.css";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="parent">
      <div className="sidebar">
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
        <NavLink to={"/dashboard/settings"}>Settings</NavLink>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
