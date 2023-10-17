import React, { useContext } from "react";
import "./sidebartoggle.css";
import { GlobalContext } from "../../../../../../App";

export default function SideBarToggle({ onClick }) {
  const { directory } = useContext(GlobalContext);

  return (
    <button className="sidebar-toggle" onClick={onClick}>
      <i className="bi bi-list" style={{ color: "black" }}></i>
      <div className="top-directory-label">{directory?.label}</div>
    </button>
  );
}
