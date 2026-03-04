import React from 'react';
import '../styles/NewComponents.css';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="new-section-container bg-alt">
      <h2 className="new-section-title">About Us</h2>
      <p className="new-section-text">
        We are a team of passionate developers and designers dedicated to building
        high-quality web and mobile solutions for small businesses and startups.
      </p>
    </section>
  );
};

export default AboutUs;
