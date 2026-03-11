// src/components/CTA_Footer.tsx

import React from 'react';
import './../styles/CTA_Footer.css';

const CTA_Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., sending data to an API endpoint)
    alert('Thank you for your interest! We will be in touch shortly.');
  };

  return (
    <section className="cta-footer-section">
      <div className="cta-content-wrapper">
        <div className="text-content">
          <h2 className="cta-title">Ready to Launch Your Next Project?</h2>
          <p className="cta-subtitle">
            Let’s discuss how modern web development can help your small business or startup grow faster.<br/><br/>
            <strong>Get a free, no-obligation quote today.</strong>
          </p>
        </div>
        
        <form className="cta-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              aria-label="Your Name"
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Your Business Email" 
              required 
              aria-label="Your Business Email"
            />
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Tell us briefly about your project (e.g., New Website, Bug Fixes)" 
              rows={3}
              required 
              aria-label="Project Details"
            />
          </div>
          <button type="submit" className="cta-primary submit-button">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA_Footer;