import React from 'react';

const PriceBlurb: React.FC = () => {
  return (
    <section id="price-blurb" className="py-16 px-4 bg-orange-50 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">
          Find out how much it would to grow your business
        </h2>
        <button className="cta-primary max-w-xs">
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default PriceBlurb;
