// src/pages/HomePage.tsx

import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services'; // NOTE: This will become its own page soon!
import CTA_Footer from '../components/CTA_Footer';

// Use a fragment or div, but remove the main tag as it will be in App.tsx
const HomePage: React.FC = () => {
  return (
    <> 
      <Hero />
      <Services /> 
      <CTA_Footer />
      {/* Testimonials, etc., remain on the home page */}
    </>
  );
};

export default HomePage;