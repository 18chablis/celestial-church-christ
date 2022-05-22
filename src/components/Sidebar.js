import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  const token = localStorage.getItem("user-token");

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="sidebar" id="sidebar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={token !== null && token !== "" && showSidebar} />
          </Link>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <IoMdCloseCircle
                    onClick={token !== null && token !== "" && showSidebar}
                  />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  token !== null &&
                  token !== "" && (
                    <li
                      key={index}
                      className={item.cname}
                      onClick={showSidebar}
                    >
                      <Link to={item.path}>
                        {item.icons}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  )
                );
              })}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
