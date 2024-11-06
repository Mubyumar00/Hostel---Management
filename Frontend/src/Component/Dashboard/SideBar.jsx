import React, { useState } from "react";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";

const DashboardLinks = [
  { title: "Dashboard", route: "/home-dash" },
  { title: "Students", route: "#" },
  { title: "Room", route: "#" },
  { title: "Report", route: "#" },
];

const SideBar = () => {
  const [activeIndex, setactiveIndex] = useState(0);

  const handleLinkClick = (index) => {
    setactiveIndex(index);
  };

  return (
    <aside className="--flex-start">
      <div className="left">
        {DashboardLinks.map((DashboardLink, index) => (
          <div className="--flex-center --dir-column">
            <NavLink
              to={DashboardLink.route}
              className={index === activeIndex ? "active-link" : ""}
              onClick={() => handleLinkClick(index)}
            >
                {DashboardLink.title}
            </NavLink>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
