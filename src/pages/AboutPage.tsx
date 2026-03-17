import React from 'react';
import './../styles/PageStyles.css';
import './../styles/AboutPage.css';
import bgImg from "../assets/shapes_hero_image.png";
import CTA_Footer from "../components/CTA_Footer";
import ManagedBackground from "../components/GradientBackground";

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
              <div className="value-grid">
                <div className="value-card-wrapper">
                  <ManagedBackground
                    title="🚀 Startup Focus"
                    subtitle="We understand lean budgets and rapid iterations."
                    blobColor="#f99a26"
                  />
                </div>
                <div className="value-card-wrapper">
                  <ManagedBackground
                    title="💡 Modern Stack"
                    subtitle="Built on cutting-edge, secure technology."
                    blobColor="#df9f40"
                  />
                </div>
                <div className="value-card-wrapper">
                  <ManagedBackground
                    title="🤝 Dedicated Support"
                    subtitle="Direct access to the developers building your future."
                    blobColor="#e7d8c1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA_Footer />
    </>
  );
};

export default AboutPage;