import { createBrowserRouter } from "react-router-dom";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";

import {Home} from "../pages/Home";

export const router = createBrowserRouter([
  {
    errorElement: <NotFound />
  },
  {
    path: "/",
    element: <Home/>,
  },
  {
     path: "/contact",
     element: <Contact />
  }

]);
