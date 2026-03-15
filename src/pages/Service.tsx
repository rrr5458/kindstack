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
  prices: {
    heading: string;
    subheading: string;
  }
  details: {
    heading: string;
    text: string;
    points: string[];
  }[];
}

const Service: React.FC<ServiceProps> = ({ title, iconColor, description, details, prices }) => {
  return (
    <section className="service-hero-section" id="service-page">
      <div className="content-container-main-services">
        <div className="content-container-two" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <div className="page-content service-detail-grid" style={{ width: '100%', marginTop: 0 }}>
            <div className="hero-gradient-overlay" style={{ pointerEvents: 'auto', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <GradientBackground title={prices.heading} subtitle={prices.subheading} blobColor={iconColor} prices={true} />
            </div>

            <div className="services-title-one-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{display: "flex", alignItems: "center", width: "70%"}}>
                <h1 className="hero-title-one services-title">
                  {title}
                </h1>
                  <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <PixelSmiley color={iconColor} scale={6} />
                  </span>
              </div>
              <p className="hero-sub-one">{description}</p>
            </div>

            {details.map((detail, index) => (
              <div key={index} className="hero-gradient-overlay" style={{ pointerEvents: 'auto', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <GradientBackground title={detail.heading} subtitle={detail.text} blobColor={iconColor}>
                  <ul style={{ listStylePosition: 'outside', paddingLeft: '2rem', marginTop: '2rem', textAlign: 'left' }}>
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