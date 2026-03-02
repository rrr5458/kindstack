// src/components/Header.tsx

import React, { useState, useEffect } from "react";
import "./../styles/Header.css";
import { Link } from "react-router-dom";
// import DownArrow from "./../shapes/DownArrow";
import imgSroucePng from "../assets/3dsmiley.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from "./Dropdown";

const Header: React.FC = () => {
  // 1. State to track if the scroll threshold has been passed
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

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
        <div className="left-section">
          <img
            src={imgSroucePng}
            width="50"
            height="50"
            alt="Description of the image"
          ></img>
          <div className="logo">
            <h1>
              <span className="brand-accent">KindStack</span>
              <span className="brand-tagline">WebSolutions</span>
            </h1>
          </div>
        </div>
      </Link>
      <div className="middle-section">
        {/* <Link to="/services" className="middle-link">
          <span className="middle-link-text">Services</span>
          <DownArrow isOpen={false} />
        </Link>
        <Link to="/services" className="middle-link">
          <span className="middle-link-text">About</span>
        </Link>
        <Link to="/services" className="middle-link">
          <span className="middle-link-text">Portfolio</span>
        </Link> */}
      </div>

      <div className="right-section">
        <div className="cta-secondary-container">
          <Link to="/contact">
            <button className="cta-secondary">Contact</button>
          </Link>
        </div>
        <div className="dropdown-wrapper" style={{ position: "relative" }}>
          <GiHamburgerMenu
            size={50}
            color={"#f99a26"}
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpen(!isOpen)}
          />
          <Dropdown open={isOpen}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
