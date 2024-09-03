/** @format */

import React from "react";
import Header from "../Header/Header";
import First from "./First";
import Footer from "./Footer";
import Happening from "./Happening";
import Hero from "./Hero";
import Postman from "./Postman";
import Spotlight from "./Spotlight";
import Teams from "./Teams";

const HomeScreem = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Postman />
      <Happening />
      <First />
      <Spotlight />
      <Teams />
      <Footer />
    </div>
  );
};

export default HomeScreem;
