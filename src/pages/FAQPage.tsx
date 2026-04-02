import React, { useState } from "react";
import "./../styles/PageStyles.css";
import "./../styles/FAQPage.css";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className={`faq-question ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </button>
      <div className={`faq-answer-container ${isOpen ? "open" : ""}`}>
        <div className="faq-answer">{answer}</div>
      </div>
    </div>
  );
};

const FAQPage: React.FC = () => {
  const services = [
    { color: "#ff5f6e" },
    {
      color: "#29d68f",
    },
    {
      color: "#ffcf3b",
    },
    {
      color: "#eee6e1ff",
    },
    {
      color: "#7b61ff",
    },
  ];
  const faqs = [
    {
      question: "What services do you offer?",
      answer: (
        <p>
          We offer a range of services including web development, mobile
          development, site hosting, AI chatbots, automations & plugins, and
          APIs & integrations. See our sevices section for more details.
        </p>
      ),
    },
    {
      question: "How much does a website cost?",
      answer: (
        <p>
          Our pricing varies depending on the project's scope and requirements.
          We offer free consultations to understand your needs and provide
          custom project pricing. We also have set pricing for some services,
          like our AI Chatbots starting at $60/month with a $500 setup fee.
        </p>
      ),
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: (
        <p>
          Yes, we do. For example, our Site Hosting service includes managed
          hosting where we handle automatic backups, updates, security
          monitoring, and provide reliable support. We believe in building
          long-term partnerships with our clients.
        </p>
      ),
    },
    {
      question: "How long does it take to build a website?",
      answer: (
        <p>
          The timeline depends on the complexity of the project. A simple
          brochure website might take a few weeks, while a complex web
          application could take several months. We will provide a detailed
          timeline during our initial consultation.
        </p>
      ),
    },
    {
      question: "What technologies do you use?",
      answer: (
        <p>
          We specialize in modern, high-quality technologies. Our preferred
          stack includes React and TypeScript for robust, scalable foundations.
          We also work with various other tools and platforms depending on the
          specific needs of the project.
        </p>
      ),
    },
    {
      question: "Will I own the code once the project is finished",
      answer:
        "Absolutely. Once the final payment is made, you own the intellectual property and the source code for the custom solutions we build for you. We provide full access and documentation so you have complete control over your project.",
    },
    {
      question: "Can you integrate with third-party software we already use?",
      answer:
        "Yes, custom APIs and integrations are one of our core services. We can connect your new application or website with your existing tools, such as CRMs (Salesforce, HubSpot), payment gateways (Stripe, PayPal), or messaging services (Twilio, Slack).",
    },
  ];

  return (
    <section className="new-section-container" id="faq-page">
      <header className="page-header">
        <h1>Frequently Asked Questions</h1>
        <p className="page-subtitle">
          Find answers to common questions about our services and process.
        </p>
      </header>
      <div className="dash-divider-container">
        {services.map((item, i) => (
          <div
            key={i}
            className="divider-dash"
            style={{ backgroundColor: item.color } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="page-content">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="faq-contact-cta">
          <h3>Still have questions?</h3>
          <p>We're here to help! Reach out to us directly.</p>
          <a href="/contact" className="cta-secondary faq-contact-btn">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
