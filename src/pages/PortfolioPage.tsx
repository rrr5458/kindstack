

import React from 'react';
import './../styles/PageStyles.css';
import { Link } from "react-router-dom";
import './../styles/PortfolioPage.css';


interface CaseStudy {
  title: string;
  client: string;
  focus: string;
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Local Cafe E-commerce Launch',
    client: 'Bean & Brew Co.',
    focus: 'Full site development, Custom ordering system',
    link: '#project1',
  },
  {
    title: 'SaaS Dashboard Refactor',
    client: 'DataFlow Analytics',
    focus: 'Bug fixing, React feature enhancement, Performance optimization',
    link: '#project2',
  },
  {
    title: 'Startup MVP Build',
    client: 'IdeaGen Technologies',
    focus: 'Minimum Viable Product (MVP) built in 6 weeks',
    link: '#project3',
  },
];

const PortfolioPage: React.FC = () => {
  return (
    <section className="page-container" id="portfolio-page">
      <header className="page-header">
        <h1>✨ Our Recent Work & Case Studies</h1>
      </header>
      
      <div className="page-content portfolio-grid">
        {caseStudies.map((study, index) => (
          <div key={index} className="case-study-card">
            <h3>{study.title}</h3>
            <p>Client: **{study.client}**</p>
            <p>Focus: {study.focus}</p>
            <a href={study.link} className="cta-link">View Details →</a>
          </div>
        ))}
      </div>

      <div className="portfolio-cta">
        <p>Ready to see your project here? Let's talk.</p>
        <Link to="/contact" className="cta-primary">Start a Project</Link>
      </div>
    </section>
  );
};

export default PortfolioPage;