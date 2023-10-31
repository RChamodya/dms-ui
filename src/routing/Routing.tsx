import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Login from "../views/login/Login";
import Login2 from "../views/login/Login2";
import Login4 from "../views/login/Login4";
import Dashboard from "../views/dashboard/Dashboard";
import DocumentPage from "../views/documentPage/DocumentPage";
import CalenderPage from "../views/calenderPage/CalenderPage";
import NotificationPage from "../views/notificationPage/NotificationPage";

function Routing() {
  return (
    <Routes>
      {/* <Route path="/" element={<Login4 />} /> */}

      <Route path="/" element={<Dashboard />} />
      <Route path="/documents" element={<DocumentPage />} />
      <Route path="/calendar" element={<CalenderPage />} />
      <Route path="/notification" element={<NotificationPage />} />
    </Routes>
  );
}
export default Routing;
