import React, { useState, useEffect } from "react";
import "./../styles/Header.css";
import { Link } from "react-router-dom";
import imgSroucePng from "../assets/3dsmiley.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from "./Dropdown";

const Header: React.FC = () => {

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

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
          <Dropdown open={isOpen} onClose={() => setIsOpen(false)}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
