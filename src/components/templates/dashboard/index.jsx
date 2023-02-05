import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../organisms";

import { SlHome } from 'react-icons/sl'
import { TbNotebook } from "react-icons/tb";
import { BsJoystick } from "react-icons/bs";
import { RiCalendar2Line } from "react-icons/ri";

const DashboardLayout = () => {
  const sideBarLinks = [
    {
      path: "/username/dashboard",
      name: "Dashboard",
      icon: <SlHome />,
    },
    {
      path: "/username/results",
      name: "Results",
      icon: <TbNotebook />,
    },
    {
      path: "/username/subjects",
      name: "Subjects",
      icon: <BsJoystick />,
    },
    {
      path: "/username/events/new",
      name: "Upcoming Events",
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

export default DashboardLayout;
