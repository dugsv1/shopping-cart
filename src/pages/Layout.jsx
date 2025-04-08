import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <div className="layout">
        <Navbar />
        <main>
          <Outlet />
        </main>
        {/* Future Footer */}
      </div>
    </>
  );
}
