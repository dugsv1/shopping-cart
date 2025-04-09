import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import Reports from "./pages/Reports/Reports.jsx";
import Error404 from "./pages/NotFound.jsx";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home/Home.jsx";

const root = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/reports",
        Component: Reports,
      },
    ],
  },
]);

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
