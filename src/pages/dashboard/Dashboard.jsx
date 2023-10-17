import React, { useContext } from "react";
import "./dashboard.css";
import { GlobalContext } from "../../App";

export default function Dashboard() {
  //
  //  ------------------------------  Variables  -----------------------------  //

  const { directory } = useContext(GlobalContext);

  //  ------------------------------  Functions  -----------------------------  //

  //  ------------------------------  UseEffects  ----------------------------  //

  //  ---------------------------------  JSX  --------------------------------  //

  return (
    <div className="dashboard">
      <div className="page-label">{directory?.label}</div>
    </div>
  );
}
