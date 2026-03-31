import React from "react";
import "./../styles/Hero.css";
import bgImg from "../assets/shapes_hero_image.png";
import triangleImg from "../assets/yellow-triangle.png";
import circleImg from "../assets/orange-circle.png";
import GradientBackground from "./GradientBackground";
import { Link } from "react-router-dom";
import LogoScroller from "./LogoScroller";
import { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="image-background">
        <img src={bgImg} alt="Hero Background" className="hero-bg-img" />
      </div>
      <div className="content-container-main">
        <div className="content-container-one">
          <img
            src={triangleImg}
            alt="Yellow triangle"
            className="hero-shape shape-tl"
          />
          <div className="hero-title-one-container">
            <h2 className="hero-title-one">
              AI That Actually Knows Your Business
            </h2>
            <p className="hero-sub-one">
              No coding. Simply sync your website or manuals and let our AI handle the rest. <br />

              Accessible for every budget
            </p>
            <div className="cta-secondary-container-hero">
              <Link to="/contact">
                <button className="cta-secondary-hero">Get a Demo</button>
              </Link>
            </div>
            <img
              src={circleImg}
              alt="Orange circle"
              height="300"
              width="300"
              className="shape-br"
            />
          </div>
          <div className="hero-video-container">
            <div className={`try-it-content ${isScrolled ? 'hidden' : ''}`}>
              <span className="try-it-text">Try it out!</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 600 600"
                width="600"
                height="600"
                className="try-it-arrow"
              >
                <path
                  d="M100,50 Q400,100 480,450 L430,450 L520,550 L580,420 L530,420 Q450,50 100,0 Z"
                  fill="#f99a26"
                  stroke="black"
                  strokeWidth="10"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-container-two">
          <div className="hero-gradient-overlay mr-5rem">
            <GradientBackground title={"Your Support Team’s New Secret Weapon"} subtitle={"Automate 80% of your customer queries. Our AI learns from your FAQ and help desk to provide instant, human-like responses 24/7"} blobColor="#f99a26"/>
          </div>
          <div className="hero-gradient-overlay">
            <GradientBackground title={"Your Knowledge, Now Conversational"} subtitle={"Turn your website, PDFs, and business manuals into a secure, private AI agent that answers customers with 100% factual accuracy"}/>
          </div>
        </div>
        <div className="scroller-container">
          <span className="scroller-caption">
            WORKING ALONGSIDE
          </span>
          <LogoScroller />
        </div>
      </div>
    </section>
  );
};

export default Hero;
