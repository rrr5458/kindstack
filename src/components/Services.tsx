

import React from 'react';
import './../styles/Services.css';


interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

const serviceData: ServiceItem[] = [
  {
    icon: '✨',
    title: 'New Website Builds',
    description: "Launch a stunning, high-performing website from scratch. We use modern React architecture to ensure speed, security, and scalability for your startup or small business.",
  },
  {
    icon: '➕',
    title: 'Feature Enhancement & Integration',
    description: "Need new functionality like e-commerce, booking systems, or user dashboards? We seamlessly integrate and build complex features into your existing site.",
  },
  {
    icon: '🛠️',
    title: 'Bug Fixes & Dedicated Maintenance',
    description: "Stop losing customers to broken forms or slow load times. We provide rapid debugging and ongoing maintenance packages to keep your site reliable and secure 24/7.",
  },
  {
    icon: '📱',
    title: 'Experts in Mobile App Solutions',
    description: "Interested in going native? Want to see your app on Google Play or the App Store? We provide mobile solutions as well",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">What We Offer</h2>
      <p className="section-subtitle">Flexible web and mobile solutions designed to drive your business forward.</p>
      
      <div className="services-grid">
        {serviceData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      
      {}
      <button className="cta-secondary services-cta">
        See Our Full Service Breakdown
      </button>
    </section>
  );
};

export default Services;