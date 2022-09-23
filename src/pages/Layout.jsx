import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import * as Icon from "react-feather";
import { Color } from "../helpers/common";
import Icons from "../components/Icons";
import Collapse from "react-bootstrap/Collapse";

const Layout = () => {
  const [open, setOpen] = useState([]);
  const pathname = useLocation().pathname;

  const isActive = (path) =>
    pathname === path ? "nav-item active" : "nav-item";

  const navTitle = [
    {
      path: "/",
      title: "Dashboard",
      component: <Icons.Grid status={pathname === `/`} />,
    },
    {
      path: "/blank",
      title: "Employees",
      component: <Icons.User status={pathname === `/blank`} />,
    },
    {
      title: "Products",
      component: <Icons.Box status={false} />,
      subcat: ["Example 1", "Example 2", "Example 3"],
    },
    {
      title: "Products",
      component: <Icons.Box status={false} />,
      subcat: ["Example 1", "Example 2", "Example 3"],
    },
  ];

  return (
    <>
      <div className="container-fluid page-body-wrapper">
        <Navbar />
        <div style={{ marginTop: "5%" }}></div>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            {navTitle.map((v, i) => {
              return !v.subcat ? (
                <li className={isActive(v.path)}>
                  <Link to={v.path} className="nav-link">
                    {v.component}
                    <span className="menu-title">{v.title}</span>
                  </Link>
                </li>
              ) : (
                <li class="nav-item">
                  <Link
                    className="nav-link"
                    aria-expanded={open[i] || false}
                    aria-controls={v.title}
                    onClick={() => setOpen(!open[i])}
                  >
                    {v.component}
                    <span class="menu-title">{v.title}</span>
                  </Link>
                  <Collapse in={open[i] || false}>
                    <div id={v.title}>
                      <ul class="nav flex-column sub-menu">
                        {v.subcat.map((sub) => {
                          return (
                            <li class="nav-item">
                              <Link class="nav-link">{sub}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </Collapse>
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
