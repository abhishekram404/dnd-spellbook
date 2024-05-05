import { RouteObject } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Homepage />,
  },
];
