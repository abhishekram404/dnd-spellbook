import { RouteObject } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import SpellDetails from "../pages/SpellDetails/SpellDetails";
import HomepageBodyInfo from "../components/HomepageBodyInfo/HomepageBodyInfo";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        index: true,
        element: (
          <HomepageBodyInfo>
            {" "}
            Choose a spell to display its details{" "}
          </HomepageBodyInfo>
        ),
      },
    ],
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
