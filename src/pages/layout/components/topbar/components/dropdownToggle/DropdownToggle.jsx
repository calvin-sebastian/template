import React, { useContext } from "react";
import "./dropdowntoggle.css";
import { GlobalContext } from "../../../../../../App";

export default function DropdownToggle({ props }) {
  const { userDetails } = useContext(GlobalContext);
  return (
    <div className="dropdown-toggle">
      <h2>Welcome, {userDetails?.name ? userDetails?.name : "User"}</h2>
      <button props={props}>
        <i className="bi bi-person-circle" style={{ color: "gray" }}></i>
      </button>
    </div>
  );
}
