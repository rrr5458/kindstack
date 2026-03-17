import React from 'react';
import './../styles/PageStyles.css';
import './../styles/AboutPage.css';
import bgImg from "../assets/shapes_hero_image.png";
import CTA_Footer from "../components/CTA_Footer";

const AboutPage: React.FC = () => {
  return (
    <>
      <section className="about-page-wrapper" id="about-page">

        <div className="about-hero-container">
          <img src={bgImg} alt="Hero Background" className="about-hero-image" />
          <div className="about-hero-overlay">
            <header className="about-hero-header">
              <h1>About KindStack WebSolutions</h1>
            </header>
          </div>
        </div>

        <div className="about-page-container">

          <div className="page-content">
            <div className="about-hero-text">
              <h2>Our Mission: Empowering Small Business</h2>
              <p>
                We founded KindStack WebSolutions with a simple belief: modern, high-quality web development shouldn't be exclusive to large corporations. We specialize in providing <strong>fast, reliable, and scalable web solutions</strong> tailored specifically for small businesses and ambitious startups.
              </p>
              <p>
                We pride ourselves on using the latest technologies like <strong>React and TypeScript</strong> to build robust foundations, ensuring your website is an asset that grows with you, not a burden that slows you down.
              </p>
            </div>

            <div className="about-why-us">
              <h2>Why Choose Us?</h2>
              <ul className="value-list">
                <li>
                  <span className="value-icon">🚀</span>
                  <div>
                    <strong>Startup Focus:</strong> We understand lean budgets and rapid iterations.
                  </div>
                </li>
                <li>
                  <span className="value-icon">💡</span>
                  <div>
                    <strong>Modern Stack:</strong> Built on cutting-edge, secure technology.
                  </div>
                </li>
                <li>
                  <span className="value-icon">🤝</span>
                  <div>
                     <strong>Dedicated Support:</strong> Direct access to the developers building your future.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CTA_Footer />
    </>
  );
};

export default AboutPage;