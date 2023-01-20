import React from "react";
import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { TbNotebook } from "react-icons/tb";
import { BsJoystick } from "react-icons/bs";
import { RiCalendar2Line } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";

import { Images } from "../../constants";

import "./sidebar.scss";

const Sidebar = () => {
  const sideBarLinks = [
    {
      path: "/username/dashboard",
      name: "Dashboard",
      icon: <GrHomeRounded />,
    },
    {
      path: "/username/Results",
      name: "Results",
      icon: <TbNotebook />,
    },
    {
      path: "/username/Subjects",
      name: "Subjects",
      icon: <BsJoystick />,
    },
    {
      path: "/username/Events",
      name: "Upcoming Events",
      icon: <RiCalendar2Line />,
    },
  ];
  return (
    <nav className="sidebar">
      <div className="sidebar__logo img-size">
        <img src={Images.logo} alt="logo" />
      </div>

      <div className="sidebar__links">
        <div >
          {sideBarLinks.map((item, index) => (
            <NavLink to={item.path} key={index} className="app__flex-3" activeclassname = "active">
              <span>{item.icon}</span>
              <p className="p-text">{item.name}</p>
            </NavLink>
          ))}
        </div>

        <div>
          <NavLink to={"/username/settings"} className="app__flex-3">
            <span>
              <AiOutlineSetting />
            </span>
            <p className="p-text">settings</p>
          </NavLink>
          <NavLink to={"/username/signout"} className="app__flex-3">
            <span>
              <AiOutlineSetting />
            </span>
            <p className="p-text">sign out</p>
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Sidebar;
