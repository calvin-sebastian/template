import React, { useCallback, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../App";
import "./sidebar.css";

export default function Sidebar({ showSidebar, setShowSidebar, directory }) {
  //
  //  ------------------------------  Variables  -----------------------------  //

  const directories = [{ label: "Dashboard", url: "/" }];

  //  ------------------------------  Functions  -----------------------------  //

  //  ------------------------------  UseEffects  ----------------------------  //

  //  ---------------------------------  JSX  --------------------------------  //
  console.log(showSidebar);
  return (
    <div
      className={`sidebar ${!showSidebar ? "hide-sidebar" : "show-sidebar"}`}
      style={{ color: "black" }}
    >
      {directories.map((dir, index) => {
        return (
          <div key={index} className="directory-label">
            {dir.label}
          </div>
        );
      })}
    </div>
  );
}
