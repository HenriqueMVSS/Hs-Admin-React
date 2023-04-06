import { BrowserRouter } from "react-router-dom";
import React from "react";

type TestProps = {
  children: React.ReactNode
}

export const RouteTest = ({children} : TestProps) => (
  <BrowserRouter>{children}</BrowserRouter>
)
