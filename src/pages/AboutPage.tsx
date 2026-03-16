import React from 'react';
import './../styles/PageStyles.css';
import './../styles/AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <section className="about-page-wrapper" id="about-page">
      <div className="about-page-container">
        <header className="page-header">
          <h1>👋 About KindStack WebSolutions</h1>
        </header>

        <div className="page-content about-layout">
          <div className="about-content">
            <h2>Our Mission: Empowering Small Business</h2>
            <p>
              We founded KindStack WebSolutions with a simple belief: modern, high-quality web development shouldn't be exclusive to large corporations. We specialize in providing <strong>fast, reliable, and scalable web solutions</strong> tailored specifically for small businesses and ambitious startups.
            </p>
            <p>
              We pride ourselves on using the latest technologies like <strong>React and TypeScript</strong> to build robust foundations, ensuring your website is an asset that grows with you, not a burden that slows you down.
            </p>
          </div>

          <div className="about-info-card">
            <h2>Why Choose Us?</h2>
            <ul className="value-list">
              <li>🚀 <strong>Startup Focus:</strong> We understand lean budgets and rapid iterations.</li>
              <li>💡 <strong>Modern Stack:</strong> Built on cutting-edge, secure technology.</li>
              <li>🤝 <strong>Dedicated Support:</strong> Direct access to the developers building your future.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;