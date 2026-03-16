import React from "react";
import "./../styles/Hero.css";
import bgImg from "../assets/shapes_hero_image.png";
import triangleImg from "../assets/yellow-triangle.png";
import circleImg from "../assets/orange-circle.png";
import GradientBackground from "./GradientBackground";
import { Link } from "react-router-dom";
import LogoScroller from "./LogoScroller";

const Hero: React.FC = () => {
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
            <span className="hero-sub-one">
              No coding. Simply sync your website or manuals and let our AI handle the rest.
            </span>
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
            <video autoPlay loop muted playsInline className="hero-video">
              <source
                src="https://cdn.prod.website-files.com/5c97e8c9de94e8a3480419a5/63c1b35938ee466aac93e225_new-full_10-transcode.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="scroller-container">
          <span className="scroller-caption">
            WORKING ALONGSIDE
          </span>
          <LogoScroller />
        </div>
        <div className="content-container-two">
          <div className="hero-gradient-overlay mr-5rem">
            <GradientBackground title={"Your Support Team’s New Secret Weapon"} subtitle={"Automate 80% of your customer queries. Our AI learns from your FAQ and help desk to provide instant, human-like responses 24/7"} blobColor="#f99a26"/>
          </div>
          <div className="hero-gradient-overlay">
            <GradientBackground title={"Your Knowledge, Now Conversational"} subtitle={"Turn your website, PDFs, and business manuals into a secure, private AI agent that answers customers with 100% factual accuracy"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
