// src/pages/HomePage.tsx

import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import OtherServices from '../components/OtherServices';
import PriceBlurb from '../components/PriceBlurb';
import CTA_Footer from '../components/CTA_Footer';

// Use a fragment or div, but remove the main tag as it will be in App.tsx
const HomePage: React.FC = () => {
  return (
    <> 
      <Hero />
      <AboutUs />
      <OtherServices />
      <PriceBlurb />
      <CTA_Footer />
      {/* Testimonials, etc., remain on the home page */}
    </>
  );
};

export default HomePage;