import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import OtherServices from "../components/OtherServices";
import PriceBlurb from "../components/PriceBlurb";
import CTA_Footer from "../components/CTA_Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <OtherServices />
      <AboutUs />
      <PriceBlurb />
      <CTA_Footer />
    </>
  );
};

export default HomePage;
