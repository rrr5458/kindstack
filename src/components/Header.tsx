import React, { useState, useEffect, useRef } from "react";
import "./../styles/Header.css";
import { Link, useLocation } from "react-router-dom";
import imgSroucePng from "../assets/3dsmiley.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from "./Dropdown";

const Header: React.FC = () => {

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 150;

      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = scrolled ? "main-header scrolled" : "main-header";

  return (
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
      </div>
      <div className="right-section">
        <div className="cta-secondary-container">
          <Link to="/contact">
            <button className="cta-secondary">816.550.3857</button>
          </Link>
        </div>
        <div className="dropdown-wrapper" ref={dropdownRef}>
          <GiHamburgerMenu
            size={50}
            color={"#f99a26"}
            onClick={() => setIsOpen(!isOpen)}
            className="hamburger-icon"
          />
          <Dropdown open={isOpen} onClose={() => setIsOpen(false)}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
