import React from "react";
import { Link } from "react-router-dom";
import "../styles/NewComponents.css";
import "../styles/OtherServices.css";
import PixelSmiley from "./PixelSmiley";

const services = [
  { title: "Site Hosting", color: "#ff5f6e", link: "/services/site-hosting" },
  {
    title: "Web Development",
    color: "#29d68f",
    link: "/services/web-development",
  },
  {
    title: "Mobile Development",
    color: "#ffcf3b",
    link: "/services/mobile-development",
  },
  {
    title: "Automations and Plugins",
    color: "#ff8c42",
    link: "/services/automations-and-plugins",
  },
  {
    title: "APIs and Integrations",
    color: "#7b61ff",
    link: "/services/apis-and-integrations",
  },
];

const OtherServices: React.FC = () => {
  return (
    <section id="other-services" className="new-section-container">
      <div className="dash-divider-container">
        {services.map((item, i) => (
          <div
            key={i}
            className="divider-dash"
            style={{ backgroundColor: item.color }}
          />
        ))}
      </div>
      <p className="new-section-text mb-12">
        We offer a wide range of additional services to help your business
        succeed online. Contact us to learn more about how we can help you grow.
      </p>

      <div className="other-services-grid">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="other-services-card">
            <div className="other-services-icon">
              <PixelSmiley color={service.color} scale={4.5} />
            </div>
            <h3 className="other-services-title">{service.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OtherServices;
