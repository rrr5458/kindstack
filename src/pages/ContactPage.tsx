// src/pages/ContactPage.tsx

import React from 'react';
import './../styles/PageStyles.css';
import './../styles/ContactPage.css';

const ContactPage: React.FC = () => {
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzN3s7tErpgCSn3VNz9A3lSFBaJTc-Wbg0vKMVm6GgbbpIi8J3bgN2sGTm3XaJPisfm/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      projectType: formData.get('projectType'),
      message: formData.get('message'),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
      });
      alert('Inquiry sent! We will respond within one business day.');
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your inquiry. Please try again later.');
    }
  };

  return (
    <section className="contact-page-wrapper" id="contact-page">
      <div className="page-container">
        <header className="page-header">
          <h1>Let's Build Your Next Digital Project</h1>
          <p className="page-subtitle">Fill out the form below to get a free consultation and project estimate.</p>
        </header>

        <div className="page-content contact-layout">
          <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Business Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="project-type">Project Type</label>
            <select id="project-type" name="projectType" required>
              <option value="" disabled>Select a service</option>
              <option value="new">New Website Build</option>
              <option value="feature">Feature Enhancement</option>
              <option value="bug">Bug Fixes & Maintenance</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="details">Project Details / Goals</label>
            <textarea id="details" name="message" rows={5} required />
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
      </div>
    </section>
  );
};

export default ContactPage;
