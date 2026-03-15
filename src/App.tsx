import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.css';
import './styles/PageTransition.css';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import Service from './pages/Service';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Header />

      <main>
        <div key={location.pathname} className="fade-in">
          <Routes location={location}>

            <Route path="/" element={<HomePage />} />

            <Route path="/services" element={<ServicesPage />} />

            <Route path="/services/ai-chatbots" element={
              <Service
                title="AI Chatbots"
                iconColor="#f99a26"
                description="Turn your website into a 24/7 assistant that answers questions, captures leads, and helps customers instantly."
                prices={{ heading: "$500 Setup", subheading: "Starting at $60/month" }}
                details={[
                  {
                    heading: "Web Chatbots",
                    text: "AI assistants embedded on your website that answer customer questions, guide visitors, and capture leads even when you're offline.",
                    points: [
                      "Answer common customer questions instantly",
                      "Capture and qualify leads automatically",
                      "Provide 24/7 customer support"
                    ]
                  },
                  {
                    heading: "Social Media Bots",
                    text: "Automatically respond to messages and comments on social platforms so every potential customer gets an immediate response.",
                    points: [
                      "Instant replies to Instagram and Messenger",
                      "Turn social messages into real leads",
                      "Automate appointment or quote requests"
                    ]
                  }
                ]}
              />
            } />

            <Route path="/services/site-hosting" element={
              <Service
                title="Site Hosting"
                iconColor="#ff5f6e"
                description="Reliable, high-performance hosting that keeps your website fast, secure, and always online."
                prices={{ heading: "$150 Setup", subheading: "Starting at $7/month" }}
                details={[
                  {
                    heading: "Managed Hosting",
                    text: "We handle the technical work so you can focus on running your business.",
                    points: [
                      "Automatic backups and updates",
                      "Security monitoring and protection",
                      "Reliable uptime and support"
                    ]
                  },
                  {
                    heading: "Performance Optimization",
                    text: "Hosting environments tuned for speed and reliability so your site loads quickly and performs well.",
                    points: [
                      "Faster page load times",
                      "Improved SEO performance",
                      "Scales easily as traffic grows"
                    ]
                  }
                ]}
              />
            } />

            <Route path="/services/web-development" element={
              <Service
                title="Web Development"
                iconColor="#29d68f"
                description="Custom websites and web apps designed to attract visitors and convert them into customers."
                prices={{ heading: "Free consultation", subheading: "Custom project pricing" }}
                details={[
                  {
                    heading: "Modern Frontend Interfaces",
                    text: "Beautiful, responsive user interfaces that provide a fast and intuitive experience on every device.",
                    points: [
                      "Mobile-friendly responsive design",
                      "Fast and interactive user experiences",
                      "Built with modern frameworks"
                    ]
                  },
                  {
                    heading: "Secure Backend Systems",
                    text: "Reliable backend architecture that powers your applications and keeps your data secure.",
                    points: [
                      "Secure API development",
                      "Scalable application architecture",
                      "Reliable database systems"
                    ]
                  }
                ]}
              />
            } />

            <Route path="/services/mobile-development" element={
              <Service
                title="Mobile Development"
                iconColor="#ffcf3b"
                description="Custom mobile apps that help you reach customers directly on their phones."
                prices={{ heading: "Free consultation", subheading: "Custom project pricing" }}
                details={[
                  {
                    heading: "Cross-Platform Apps",
                    text: "Launch on both iOS and Android with one codebase, reducing development costs and time to market.",
                    points: [
                      "Reach both iPhone and Android users",
                      "Faster development timelines",
                      "Lower long-term maintenance costs"
                    ]
                  },
                  {
                    heading: "App Store Deployment",
                    text: "We handle the complicated submission and approval process for both major app stores.",
                    points: [
                      "Apple App Store submission",
                      "Google Play Store deployment",
                      "Ongoing updates and improvements"
                    ]
                  }
                ]}
              />
            } />

            <Route path="/services/automations-and-plugins" element={
              <Service
                title="Automations & Plugins"
                iconColor="#e7d4c8ff"
                description="Automate repetitive work and connect your tools so your business runs more efficiently."
                prices={{ heading: "Free consultation", subheading: "Custom project pricing" }}
                details={[
                  {
                    heading: "Workflow Automation",
                    text: "Automatically move data between your apps and eliminate repetitive manual work.",
                    points: [
                      "Save hours of manual work each week",
                      "Reduce human errors",
                      "Trigger automated notifications and tasks"
                    ]
                  },
                  {
                    heading: "Custom Plugins",
                    text: "Extend platforms like WordPress, Shopify, or internal tools with functionality designed for your workflow.",
                    points: [
                      "Custom features tailored to your business",
                      "Seamless integration with existing tools",
                      "Performance-focused development"
                    ]
                  }
                ]}
              />
            } />

            <Route path="/services/apis-and-integrations" element={
              <Service
                title="APIs & Integrations"
                iconColor="#7b61ff"
                description="Connect your business systems so data flows automatically and your tools work together."
                prices={{ heading: "Stripe integrations starting at $1,000", subheading: "Twilio integrations starting at $2,000" }}
                details={[
                  {
                    heading: "Third-Party Integrations",
                    text: "Connect platforms like payment systems, CRMs, messaging services, and other tools to automate business workflows.",
                    points: [
                      "Payment and billing integrations",
                      "SMS and notification systems",
                      "CRM and marketing platform connections"
                    ]
                  },
                  {
                    heading: "Custom API Development",
                    text: "Build secure APIs that allow your applications, partners, and services to communicate reliably.",
                    points: [
                      "Secure data access",
                      "Scalable architecture",
                      "Future-ready integrations"
                    ]
                  }
                ]}
              />
            } />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="*" element={<h1>404: Page Not Found</h1>} />

          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;