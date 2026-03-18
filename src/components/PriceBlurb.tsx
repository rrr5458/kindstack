import React from "react";
import "../styles/NewComponents.css";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

const PriceBlurb: React.FC = () => {
  return (
    <section id="price-blurb" className="new-section-container bg-alt">
      <h2 className="new-section-title">
        Find out how much it would to grow your business
      </h2>
      <div className="cta-secondary-container-hero">
        <Link to="/contact">
          <button className="cta-secondary-hero">Get a Demo</button>
        </Link>
      </div>
    </section>
  );
};

export default PriceBlurb;
