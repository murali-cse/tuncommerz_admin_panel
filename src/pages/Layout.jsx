import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Collapse from "react-bootstrap/Collapse";
import { navTitle } from "../components/Sidebar";
import Icons from "../components/Icons";

const Layout = () => {
  var [open, setOpen] = useState(0);
  const pathname = useLocation().pathname;

  const isActive = (path) =>
    pathname === path ? "nav-item active" : "nav-item";

  const isSelected = (id) => open === id;

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
                  <Link
                    to={v.path}
                    className="nav-link"
                    onClick={() => setOpen(0)}
                  >
                    {v.component}
                    <span className="menu-title">{v.title}</span>
                  </Link>
                </li>
              ) : (
                <li class="nav-item">
                  <Link
                    className="nav-link"
                    aria-expanded={isSelected(i)}
                    aria-controls={v.title}
                    onClick={() => {
                      setOpen(i);
                    }}
                  >
                    {v.component}
                    <span class="menu-title">{v.title}</span>
                  </Link>
                  <Collapse in={isSelected(i)}>
                    <div id={v.title}>
                      <ul class="nav flex-column sub-menu">
                        {v.subcat.map((sub) => {
                          return (
                            <li className={isActive(v.path)}>
                              <Link className="nav-link" to={sub.path}>
                                {sub.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </Collapse>
                </li>
              );
            })}
            <li
              style={{
                border: "1.5px solid #FF9494",
                fontFamily: "sans-serif",
                marginTop: "2vh",
              }}
            >
              <Link className="nav-link" to="/login">
                <Icons.Logout color={"FF9494"} />
                <span
                  style={{
                    color: "#FF9494",
                    fontWeight: "bold",
                    letterSpacing: "1.5",
                    fontSize: "12px",
                  }}
                >
                  LOGOUT
                </span>
              </Link>
            </li>
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
