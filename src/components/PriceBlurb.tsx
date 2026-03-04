import React from 'react';
import '../styles/NewComponents.css';

const PriceBlurb: React.FC = () => {
  return (
    <section id="price-blurb" className="new-section-container bg-alt">
      <h2 className="new-section-title">
        Find out how much it would to grow your business
      </h2>
      <div className="new-section-btn-container">
        <button className="new-section-btn">
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default PriceBlurb;
