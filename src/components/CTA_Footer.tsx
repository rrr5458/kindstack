// src/components/CTA_Footer.tsx

import React from 'react';
import './../styles/CTA_Footer.css';

const CTA_Footer: React.FC = () => {
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
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
      alert('Thank you for your interest! We will be in touch shortly.');
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your inquiry. Please try again later.');
    }
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
              name="name"
              placeholder="Your Name" 
              required 
              aria-label="Your Name"
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Your Business Email" 
              required 
              aria-label="Your Business Email"
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message"
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