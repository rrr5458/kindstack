// src/pages/ContactPage.tsx

import React from 'react';
import './../styles/PageStyles.css';
import './../styles/ContactPage.css';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., sending data to an API)
    alert('Inquiry sent! We will respond within one business day.');
  };

  return (
    <section className="page-container contact-page-wrapper" id="contact-page">
      <header className="page-header">
        <h1>Let's Build Your Next Digital Project</h1>
        <p className="page-subtitle">Fill out the form below to get a free consultation and project estimate.</p>
      </header>
      
      <div className="page-content contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Business Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="project-type">Project Type</label>
            <select id="project-type" required>
              <option value="" disabled>Select a service</option>
              <option value="new">New Website Build</option>
              <option value="feature">Feature Enhancement</option>
              <option value="bug">Bug Fixes & Maintenance</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="details">Project Details / Goals</label>
            <textarea id="details" rows={5} required />
          </div>
          <button type="submit" className="cta-primary submit-button">
            Send Project Inquiry
          </button>
        </form>

        <div className="contact-info-card">
          <h2>Prefer to talk?</h2>
          <p>We're available for a quick chat to discuss your needs.</p>
          <p>
            <strong>Email:</strong> <br/><a href="mailto:contact@kindstack.com">contact@kindstack.com</a>
          </p>
          <p>
            <strong>Phone:</strong> <br/><a href="tel:+15551234567">(555) 123-4567</a>
          </p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
