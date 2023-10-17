import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { GlobalContext } from "./App";
import Layout from "./pages/layout/Layout";
import Login from "./pages/login/Login";

export default function NavigationStack() {
  const { user } = useContext(GlobalContext);
  return (
    <>
      <Routes>
        <Route
          path={`/`}
          element={user ? <Layout /> : <Navigate to="/login" />}
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}
