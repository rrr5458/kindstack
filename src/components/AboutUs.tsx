import React from "react";
import "../styles/NewComponents.css";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="new-section-container bg-alt">
      <h2 className="new-section-title">About Us</h2>
      <p className="new-section-text">
        Giving small bussinesses and nonprofits the tools that power great
        software, which have gotten remarkably accessible. We noticed the
        agencies and firms are selling those solutions kept charging more. We
        think that's backwards. Our clients deserve modern, powerful technology
        at a price that reflects what it actually costs to build
      </p>
      <div className="cta-secondary-container-hero">
        <Link to="/about">
          <button className="cta-secondary-hero">Learn More</button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
