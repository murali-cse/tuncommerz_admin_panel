import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import * as Icon from "react-feather";
import { Color } from "../helpers/common";
import Icons from "../components/Icons";

const Layout = () => {
  const pathname = useLocation().pathname;

  const isActive = (path) =>
    pathname == path ? "nav-item active" : "nav-item";

  const navTitle = [
    {
      path: "/",
      title: "Dashboard",
      component: <Icons.Grid status={pathname == `/`} />,
    },
    {
      path: "/blank",
      title: "Employees",
      component: <Icons.User status={pathname == `/blank`} />,
    },
  ];

  return (
    <>
      <div className="container-fluid page-body-wrapper">
        <Navbar />
        <div style={{ marginTop: "5%" }}></div>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            {navTitle.map((v) => {
              return (
                <li className={isActive(v.path)}>
                  <Link to={v.path} className="nav-link">
                    {v.component}
                    <span className="menu-title">{v.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="main-panel">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
