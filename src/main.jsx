import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import Shop from "./pages/Shop/Shop.jsx";
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
        path: "shopping",
        Component: Shop,
      },
    ],
  },
]);

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
