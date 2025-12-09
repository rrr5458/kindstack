// src/components/Header.tsx

import React, { useState, useEffect } from "react";
import "./../styles/Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  // 1. State to track if the scroll threshold has been passed
  const [scrolled, setScrolled] = useState(false);

  // 2. Effect to add and clean up the scroll listener
  useEffect(() => {
    const handleScroll = () => {
      // Set the scroll position threshold
      const scrollThreshold = 150;

      // Check if the current vertical scroll position is greater than the threshold
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only on mount/unmount

  // 3. Conditional class for styling
  const headerClass = scrolled ? "main-header scrolled" : "main-header";

  return (
    // Apply the conditional class to the header element
    <header className={headerClass}>
      <Link to="/">
        <div  className="logo">
          <h1>
            <span className="brand-name">
              <span className="brand-accent">KindStack</span>
            </span>
            <span className="brand-tagline">WebSolutions</span>
          </h1>
        </div>
      </Link>

      {/* Revised right-section */}
      <div className="right-section">
        {/* Navigation Links */}
        <nav className="header-nav">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
        </nav>
        <Link to="/contact">
          <button className="cta-secondary">Contact</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
