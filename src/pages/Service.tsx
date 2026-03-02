import React from 'react';
import './../styles/PageStyles.css';
import './../styles/ServicesPage.css'; // Re-use the grid styling
import PixelSmiley from '../components/PixelSmiley';

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
    <section className="page-container" id="service-page">
      <header className="page-header">
        <h1 style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <PixelSmiley color={iconColor} scale={4} />
          {title}
        </h1>
        <p className="page-subtitle">{description}</p>
      </header>

      <div className="page-content service-detail-grid">
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
    </section>
  );
};

export default Service;