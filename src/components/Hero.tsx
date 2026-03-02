import React from "react";
import "./../styles/Hero.css";
import imgSroucePng from "../assets/shapes_hero_image.png";
import GradientBackground from "./GradientBackground";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* This div now acts as a true background layer */}
      <div className="image-background">
        <img
          src={imgSroucePng}
          alt="Hero Background"
          className="hero-bg-img"
        />
      </div>
      <div className="content-container-main">
        <div className="content-container-one">
          <div className="hero-title-one-container">
            <h2 className="hero-title-one">AI agents for magical customer experiences</h2>
            <span className="hero-sub-one">For something like an industry and speciality for that</span>
          </div>
          <div className="hero-video-container">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="hero-video"
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="content-container-two">
          <div className="hero-gradient-overlay">
            <GradientBackground />
          </div>
          <div className="hero-gradient-overlay">
            <GradientBackground />
          </div>
          <div className="hero-gradient-overlay">
            <GradientBackground />
          </div>
      </div>
      </div>

    </section>
  );
};

export default Hero;