import React from 'react';
import './../styles/PageStyles.css';
import './../styles/ServicesPage.css'; // Re-use the grid styling
import './../styles/Hero.css'; // Add hero styling
import PixelSmiley from '../components/PixelSmiley';
import bgImg from "../assets/shapes_hero_image.png";

interface ServiceProps {
  title: string;
  iconColor: string;
  description: string;
  details: {
    heading: string;
    text: string;
    points: string[];
  }[];
}

const Service: React.FC<ServiceProps> = ({ title, iconColor, description, details }) => {
  return (
    <section className="hero-section" id="service-page">
      <div className="image-background">
        <img src={bgImg} alt="Hero Background" className="hero-bg-img" />
      </div>
      <div className="content-container-main">
        <div className="content-container-one">
          <div className="hero-title-one-container" style={{ width: '100%', marginRight: 0 }}>
            <h1 className="hero-title-one">
              <span style={{ display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle' }}>
                <PixelSmiley color={iconColor} scale={4} />
              </span>
              {title}
            </h1>
            <p className="hero-sub-one">{description}</p>
          </div>
        </div>

        <div className="content-container-two" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <div className="page-content service-detail-grid" style={{ width: '100%', marginTop: 0 }}>
            {details.map((detail, index) => (
              <div key={index} className="service-detail-card">
                <h2>{detail.heading}</h2>
                <p>{detail.text}</p>
                <ul>
                  {detail.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;