import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import App from "./App.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Error404 from "./pages/NotFound.jsx";

const root = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <Error404 />,
  },
  {
    path: "shopping",
    Component: Shop,
  },
]);

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
