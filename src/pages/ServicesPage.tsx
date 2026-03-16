

import React from 'react';
import './../styles/PageStyles.css';
import './../styles/ServicesPage.css'

const ServicesPage: React.FC = () => {
  return (
    <section className="page-container" id="services-page">
      <header className="page-header">
        <h1>⚙️ Our Full Range of Services</h1>
      </header>

      <div className="page-content service-detail-grid">

        <div className="service-detail-card">
          <h2>New Website Development</h2>
          <p>
            We handle the entire process from initial wireframing to final deployment. Our focus is on delivering secure, responsive, and SEO-friendly sites that convert visitors into customers. Perfect for new businesses needing a reliable online presence.
          </p>
          <ul>
            <li>Custom React/TypeScript frontends</li>
            <li>Fast hosting and optimization</li>
            <li>Integration with CMS platforms (e.g., Sanity, Contentful)</li>
          </ul>
        </div>

        <div className="service-detail-card">
          <h2>Feature Enhancement & Scaling</h2>
          <p>
            If you have an existing application, we jump in to add complex features—from bespoke API integrations and payment gateways (Stripe, PayPal) to advanced user authentication and dedicated dashboards. We turn concepts into functional reality.
          </p>
          <ul>
            <li>API development and integration</li>
            <li>E-commerce solutions</li>
            <li>Database management and optimization</li>
          </ul>
        </div>

        <div className="service-detail-card">
          <h2>Reliable Maintenance & Bug Fixes</h2>
          <p>
            A broken site costs money. We offer dedicated support contracts for urgent bug fixes, security patching, dependency updates, and continuous performance monitoring, ensuring zero downtime and a smooth user experience.
          </p>
          <ul>
            <li>Rapid response debugging</li>
            <li>Security updates and patching</li>
            <li>Performance audits (PageSpeed Insights)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;