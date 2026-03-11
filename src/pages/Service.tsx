import React from 'react';
import './../styles/PageStyles.css';
import './../styles/ServicesPage.css';
import './../styles/Hero.css';
import PixelSmiley from '../components/PixelSmiley';
import GradientBackground from '../components/GradientBackground';

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
    <section className="service-hero-section" id="service-page">
      <div className="content-container-main">
        <div className="content-container-two" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <div className="page-content service-detail-grid" style={{ width: '100%', marginTop: 0 }}>
            <div className="hero-gradient-overlay" style={{ pointerEvents: 'auto', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <GradientBackground title={details[0].heading} subtitle={details[0].text} blobColor={iconColor} />
            </div>

            <div className="services-title-one-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h1 className="hero-title-one services-title">
                {title}
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                  <PixelSmiley color={iconColor} scale={4} />
                </span>
              </h1>
              <p className="hero-sub-one">{description}</p>
            </div>

            {details.map((detail, index) => (
              <div key={index} className="hero-gradient-overlay" style={{ pointerEvents: 'auto', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <GradientBackground title={detail.heading} subtitle={detail.text} blobColor={iconColor}>
                  <ul style={{ listStylePosition: 'inside', paddingLeft: 0, marginTop: '2rem' }}>
                    {detail.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </GradientBackground>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;