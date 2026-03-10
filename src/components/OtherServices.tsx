import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NewComponents.css';
import PixelSmiley from './PixelSmiley';

const services = [
  { title: 'Site Hosting', color: '#ff5f6e', link: '/services/site-hosting' },
  { title: 'Web Development', color: '#29d68f', link: '/services/web-development' },
  { title: 'Mobile Development', color: '#ffcf3b', link: '/services/mobile-development' },
  { title: 'Automations and Plugins', color: '#ff8c42', link: '/services/automations-and-plugins' },
  { title: 'APIs and Integrations', color: '#7b61ff', link: '/services/apis-and-integrations' },
];

const OtherServices: React.FC = () => {
  return (
    <section id="other-services" className="new-section-container bg-alt">
      <h2 className="new-section-title">Other Services</h2>
      <p className="new-section-text mb-12">
        We offer a wide range of additional services to help your business succeed online.
        Contact us to learn more about how we can help you grow.
      </p>

      {/*
        This new wrapper uses auto-fit for a modern grid layout,
        and standard Tailwind classes for styling that matches Services.tsx
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-rows-3 gap-8 w-[80%] max-w-[1200px] mt-12 mx-auto text-left">
        {services.map((service, index) => (
          <Link
            to={service.link}
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 p-8 bg-white border border-[#ccc] rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300"
          >
            <div className="shrink-0">
              <PixelSmiley color={service.color} scale={4.5} />
            </div>
            <h3 className="text-3xl font-bold text-[#333] tracking-tight">{service.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OtherServices;
