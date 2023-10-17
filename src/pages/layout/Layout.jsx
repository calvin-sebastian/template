import React, { useContext } from "react";
import "./layout.css";
import { GlobalContext } from "../../App";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  //
  //  ------------------------------  Variables  -----------------------------  //

  const { showSidebar, setShowSidebar, directory } = useContext(GlobalContext);

  //  ---------------------------------  JSX  --------------------------------  //

  return (
    <div className={`layout`}>
      <Topbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <main className={`${showSidebar ? "sidebar-margin" : ""}`}>
        <Sidebar
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
          directory={directory}
        />

        <div
          className={`container${
            showSidebar ? "-shown" : "-hidden"
          } g-0 my-0 py-0`}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}
