import React from 'react';
import '../styles/NewComponents.css';
import PixelSmiley from './PixelSmiley';

const services = [
  { title: 'Site Hosting', color: '#4ade80' },
  { title: 'Web Development', color: '#60a5fa' },
  { title: 'Mobile Development', color: '#facc15' },
  { title: 'Automations and Plugins', color: '#c084fc' },
  { title: 'APIs and Integrations', color: '#f87171' },
];

const OtherServices: React.FC = () => {
  return (
    <section id="other-services" className="new-section-container">
      <h2 className="new-section-title">Other Services</h2>
      <p className="new-section-text mb-12">
        We offer a wide range of additional services to help your business succeed online.
        Contact us to learn more about how we can help you grow.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-8 w-full max-w-5xl mt-12 text-left">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-6 p-6 bg-white/40 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="shrink-0">
              <PixelSmiley color={service.color} scale={4} />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherServices;
