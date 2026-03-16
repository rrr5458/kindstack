

import React from 'react';
import './../styles/PageStyles.css';
import './../styles/AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <section className="page-container" id="about-page">
      <header className="page-header">
        <h1>👋 About KindStack WebSolutions</h1>
      </header>
      
      <div className="page-content">
        <h2>Our Mission: Empowering Small Business</h2>
        <p>
          We founded KindStack WebSolutions with a simple belief: modern, high-quality web development shouldn't be exclusive to large corporations. We specialize in providing **fast, reliable, and scalable web solutions** tailored specifically for small businesses and ambitious startups.
        </p>
        <p>
          We pride ourselves on using the latest technologies like **React and TypeScript** to build robust foundations, ensuring your website is an asset that grows with you, not a burden that slows you down.
        </p>

        <h3>Why Choose Us?</h3>
        <ul className="value-list">
          <li>🚀 **Startup Focus:** We understand lean budgets and rapid iterations.</li>
          <li>💡 **Modern Stack:** Built on cutting-edge, secure technology.</li>
          <li>🤝 **Dedicated Support:** Direct access to the developers building your future.</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutPage;