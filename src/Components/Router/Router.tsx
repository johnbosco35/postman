import React from "react";
import { useRoutes } from "react-router-dom";
import Explore from "../explore/Explore";
import SignIn from "../SignIn/SignIn";

const Router = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
  ]);

  return element;
};

export default Router;
