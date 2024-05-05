import { RouteObject } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import SpellDetails from "../pages/SpellDetails/SpellDetails";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/spells",
    element: <Homepage />,
    children: [
      {
        path: ":index",
        element: <SpellDetails />,
      },
    ],
  },
];
