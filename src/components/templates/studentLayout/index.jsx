import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../organisms";

import { SlHome } from 'react-icons/sl'
import { TbNotebook } from "react-icons/tb";
import { BsJoystick } from "react-icons/bs";
import { RiCalendar2Line } from "react-icons/ri";
// import { AiOutlineSetting } from "react-icons/ai";

const StudentLayout = () => {
    const sideBarLinks = [
        {
          path: "/student/dashboard",
          name: "Dashboard",
          icon: <SlHome />,
        },
        {
          path: "/student/library",
          name: "My Library",
          icon: <TbNotebook />,
        },
        {
          path: "/student/activities",
          name: "Activities",
          icon: <BsJoystick />,
        },
        {
          path: "/student/calendar",
          name: "link park calendar",
          icon: <RiCalendar2Line />,
        },
        {
          path: "/student/portal",
          name: "Portal",
          icon: <RiCalendar2Line />,
        },
      ];

  return (
    <main style={{ width: "100%" }} className="app__flex-3">
      <div style={{ width: "21%" }}>
        <Sidebar sideLinks={sideBarLinks} />
      </div>
      <div style={{ width: "79%" }}>
        <Outlet />
      </div>
    </main>
  );
};

export default StudentLayout;
