import React from "react";
import "./../styles/Hero.css";
import bgImg from "../assets/shapes_hero_image.png";
import triangleImg from "../assets/yellow-triangle.png";
import orangeImg from "../assets/orange-circle.png";
import GradientBackground from "./GradientBackground";

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
              AI agents for magical customer experiences
            </h2>
              <img 
                src={orangeImg} 
                alt="Orange circle"
                height="300"
                width="300" 
                style={{position: "absolute", bottom: 50}}
                className="shape-br" 
              />
            <span className="hero-sub-one">
              For something like an industry and speciality for that
            </span>
          </div>

          <div className="hero-video-container">
            <video autoPlay loop muted playsInline className="hero-video">
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
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
