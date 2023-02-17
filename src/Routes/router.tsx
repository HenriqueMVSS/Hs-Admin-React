import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    errorElement: <NotFound />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
