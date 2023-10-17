import React, { useCallback, useEffect, useState } from "react";
import "./topbar.css";
import SideBarToggle from "./components/sidebarToggle/SideBarToggle";
import Title from "./components/Title";
import DropdownToggle from "./components/dropdownToggle/dropdownToggle";

export default function Topbar({ showSidebar, setShowSidebar }) {
  //
  //  ------------------------------  Variables  -----------------------------  //

  const [state, setState] = useState();

  //  ------------------------------  Functions  -----------------------------  //

  async function handleShowSidebar() {
    console.log(showSidebar);
    setShowSidebar((curr) => {
      curr = !curr;
      return curr;
    });
  }

  const template2 = useCallback(
    (newState) => {
      setState(newState);
    },
    [state, setState]
  );

  //  ------------------------------  UseEffects  ----------------------------  //

  useEffect(() => {
    if (state) console.log(state);
  }, [state]);

  //  ---------------------------------  JSX  --------------------------------  //

  return (
    <div
      className={`topbar ${showSidebar ? "sidebar-shown" : "sidebar-hidden"}`}
    >
      <div
        style={{
          height: "inherit",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <SideBarToggle onClick={handleShowSidebar} />
        <Title label={"Template"} />
        <DropdownToggle />
      </div>
    </div>
  );
}
