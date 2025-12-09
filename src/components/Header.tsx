// src/components/Header.tsx

import React from 'react';
import './../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <h1>
          <span className="brand-name">
            <span className="brand-accent">KindStack</span>
          </span>
          <span className="brand-tagline">WebSolutions</span>
        </h1>
      </div>
      
      {/* Revised right-section */}
      <div className="right-section">
        
        {/* Navigation Links */}
        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
        </nav>

        {/* CTA Button */}
        <button className="cta-secondary">
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;