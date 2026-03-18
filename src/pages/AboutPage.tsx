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
              <h1>Nice to meet you!</h1>
            </header>
          </div>
        </div>

        <div className="about-page-container">
            <div className="about-why-us-one">
              <span className="about-hero-text-heading">Built in Kansas City. Rooted in Community.</span>
              <span className="about-why-us-sub">We're a Kansas City-based software development studio with five years of experience building in some of the most fast-moving environments in tech — startups where you learn quickly, adapt constantly, and stay ahead of what's next. That means we've been working hands-on with AI and emerging technologies long before they became buzzwords, finding real, practical ways to put them to work for real businesses.</span>
              <span className="about-hero-text-heading">Technology Has Changed. The Price Hasn't - Until Now</span>
              <span className="about-why-us-sub">Here's something we noticed along the way: the tools that power great software have gotten remarkably accessible. But somehow, the agencies and firms selling those solutions kept charging more. We think that's backwards. Our clients deserve modern, powerful technology at a price that reflects what it actually costs to build</span>
              <span className="about-hero-text-heading">We Come From a Different Background</span>
              <span className="about-why-us-sub">Before writing a single line of professional code, our founder spent a decade in the classroom teaching high school students. That experience shaped everything about how we work — we listen first, explain clearly, and never leave a client in the dark about what we're building or why.
That spirit of service didn't stop at the classroom door. We're active volunteers in the Kansas City community — teaching coding skills to the next generation, serving meals to neighbors experiencing homelessness, and supporting local schools through nonprofit foundations. We believe a successful business has a responsibility to pour back into the place it calls home.</span>
              <span className="about-hero-text-heading">Let's Build Something Together</span>
              <span className="about-why-us-sub">Whether you're a startup ready to move fast or an established business that's been priced out of good tech — we'd love to talk. You deserve a partner who understands both the technology and the people it's meant to serve.</span>
            </div>
            <div className="about-why-us-two">
              <span className="about-hero-text-heading">Why Choose Us?</span>
              <div className="value-grid">
                <div className="value-card-wrapper">
                  <ManagedBackground
                    title="Startup Focus"
                    subtitle="We understand lean budgets and rapid iterations."
                    blobColor="#f99a26"
                  />
                </div>
                <div className="value-card-wrapper">
                  <ManagedBackground
                    title="Modern Stack"
                    subtitle="Built on cutting-edge, secure technology."
                    blobColor="#f99a26"
                  />
                </div>
                <div className="value-card-wrapper">
                  <ManagedBackground
                    title="Dedicated Support"
                    subtitle="Direct access to the developers building your future."
                    blobColor="#f99a26"
                  />
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