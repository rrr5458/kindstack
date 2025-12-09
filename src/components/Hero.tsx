import React from 'react';
import './../styles/Hero.css';

// --- IMPORTANT: Update these paths to match your project structure ---
// Use .mp4 and .webm formats for best cross-browser compatibility
import videoSourceMp4 from '../assets/stack_hero_vid.mp4'; 
// import videoSourceWebm from '../assets/background-video.webm'; 
// Use an image as a fallback for mobile or when the video fails to load
// import fallbackImage from '../assets/hero-background-fallback.jpg'; 

const Hero: React.FC = () => {
  return (
    <section 
      className="hero-section"
      // Optional: Inline style for the image fallback 
      // This image will be visible if the video element is hidden (e.g., via media query) or fails to load.
    //   style={{ backgroundImage: `url(${fallbackImage})` }} 
    >
      
      {/* 1. Video Background Layer (z-index: 1 in CSS) */}
      <div className="video-background">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline // Essential for allowing autoplay on mobile devices
          preload="auto"
        >
          {/* Load multiple sources for maximum browser support */}
          {/* <source src={videoSourceWebm} type="video/webm" /> */}
          <source src={videoSourceMp4} type="video/mp4" />
          {/* Fallback text - rarely seen, but good practice */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 2. Content Layer (z-index: 2 in CSS) */}
      <div className="hero-content">
        <h1 className="hero-headline">
          The Right Stack for Small Business Web Solutions
        </h1>
        <p className="hero-subtext">
          Dependable. Friendly. Capable. Local
        </p>
        <span></span>
        <button className="cta-primary">
          Start Your Project Today
        </button>
      </div>

      <div className="hero-image-container">
        {/* This could be an illustration, Lottie animation, or simple image */}


      </div>

    </section>
  );
};

export default Hero;