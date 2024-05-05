import { RouteObject } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";

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
        element: <div>SPell</div>,
      },
    ],
  },
];
