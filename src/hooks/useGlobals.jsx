import React, { useCallback, useState } from "react";

export default function useGlobals() {
  //
  //  --------------------  Variables  --------------------  //

  const [user, setUser] = useState(true);
  const [userDetails, setUserDetails] = useState({ name: "John" });
  const [showSidebar, setShowSidebar] = useState(true);
  const [directory, setDirectory] = useState({ label: "Dashboard" });

  //  --------------------  Functions  --------------------  //

  const logout = useCallback(() => {
    setUser(false);
  }, [user, setUser]);

  return {
    user,
    logout,
    showSidebar,
    setShowSidebar,
    directory,
    setDirectory,
    userDetails,
    setUserDetails,
  };
}
