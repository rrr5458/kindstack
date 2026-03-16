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
        <div className="content-container-two flex-col-start">
          <div className="page-content service-detail-grid full-width-no-mt">
            <div className="hero-gradient-overlay gradient-overlay-center">
              <GradientBackground title={prices.heading} subtitle={prices.subheading} blobColor={iconColor} prices={true} />
            </div>

            <div className="services-title-one-container title-container-flex">
              <div className="flex-align-center-70">
                <h1 className="hero-title-one services-title">
                  {title}
                </h1>
                  <span className="inline-middle">
                    <PixelSmiley color={iconColor} scale={6} />
                  </span>
              </div>
              <p className="hero-sub-one">{description}</p>
            </div>

            {details.map((detail, index) => (
              <div key={index} className="hero-gradient-overlay gradient-overlay-flex">
                <GradientBackground title={detail.heading} subtitle={detail.text} blobColor={iconColor}>
                  <ul className="service-detail-list">
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