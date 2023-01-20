import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";

const DashboardLayout = () => {
  return (
    <main style={{ width: "100%" }} className="app__flex-3">
      <div style={{ width: "21%" }}>
        <Sidebar />
      </div>
      <div style={{ width: "79%" }}>
        <Outlet />
      </div>
    </main>
  );
};

export default DashboardLayout;
