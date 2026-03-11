// src/components/Footer.tsx

import React from 'react';
import './../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content-wrapper">
        
        {/* Column 1: Logo and Company Info */}
        <div className="footer-column info-column">
          <h4 className="footer-logo">
            <span style={{ color: "#f99a26", WebkitTextStroke: "1px black" }}>KindStack</span> WebSolutions
          </h4>
          <p className="tagline">Modern web development and AI automation built for growth.</p>
          <div className="social-links">
            <a href="https://linkedin.com" aria-label="LinkedIn">🔗</a>
            <a href="https://twitter.com" aria-label="Twitter">🐦</a>
            <a href="https://github.com" aria-label="GitHub">⭐</a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4 className="column-title">Quick Links</h4>
          <ul>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/portfolio">Case Studies</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Column 3: Legal & Support */}
        <div className="footer-column">
          <h4 className="column-title">Support</h4>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="mailto:contact@kindstack.com">Contact Email</a></li>
            <li><a href="tel:+15551234567">Call Us</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} KindStack WebSolutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
