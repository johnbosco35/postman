import React from "react";
import { useRoutes } from "react-router-dom";
import Explore from "../explore/Explore";
import HomeScreem from "../Hero/HomeScreem";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp";
const AllRoutes = () => {
  const element = useRoutes([
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/",
      element: <HomeScreem />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);

  return element;
};

export default AllRoutes;
