// src/App.tsx (REVISED FOR MULTI-PAGE ROUTING)

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // 👈 NEW: Import for routing
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/main.css';
import './styles/PageTransition.css';

// Import all required page components (you'll create the others next)
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage'; // Future components
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import Service from './pages/Service';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="App">
      {/* Header and Footer are outside Routes so they appear on ALL pages */}
        <Header />
      <main>
        <div key={location.pathname} className="fade-in">
          <Routes location={location}>
            {/* 1. Map the root URL to the combined home page content */}
          <Route path="/" element={<HomePage />} />
          
          {/* 2. Map future pages to their paths */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/ai-chatbots" element={
            <Service
              title="AI Chatbots"
              iconColor="#f99a26"
              description="Intelligent conversational agents for your business."
              details={[
                {
                  heading: "Web Chatbots",
                  text: "AI chatbots embedded directly on your website to assist visitors 24/7.",
                  points: []
                },
                {
                  heading: "Social Media Bots",
                  text: "Automate DMs and comments on Instagram, Messenger, and other platforms.",
                  points: []
                }
              ]}
            />
          } />
          <Route path="/services/site-hosting" element={
            <Service
              title="Site Hosting"
              iconColor="#ff5f6e"
              description="Fast, reliable hosting for your projects."
              details={[
                {
                  heading: "Managed Hosting",
                  text: "We handle the servers so you can focus on your business. Includes updates and backups.",
                  points: []
                },
                {
                  heading: "Performance Tuning",
                  text: "Optimized server environments designed specifically for speed and reliability.",
                  points: []
                }
              ]}
            />
          } />
          <Route path="/services/web-development" element={
            <Service
              title="Web Development"
              iconColor="#29d68f"
              description="Custom websites built to perform."
              details={[
                {
                  heading: "Custom Frontends",
                  text: "Beautiful, responsive interfaces built with modern technologies like React and Tailwind.",
                  points: []
                },
                {
                  heading: "Robust Backends",
                  text: "Scalable server-side solutions to power your applications securely.",
                  points: []
                }
              ]}
            />
          } />
          <Route path="/services/mobile-development" element={
            <Service
              title="Mobile Development"
              iconColor="#ffcf3b"
              description="iOS & Android apps from concept to launch."
              details={[
                {
                  heading: "Cross-Platform Apps",
                  text: "Reach both iOS and Android users with a single codebase using React Native or Flutter.",
                  points: []
                },
                {
                  heading: "App Store Deployment",
                  text: "We handle the complex submission processes for both the Apple App Store and Google Play.",
                  points: []
                }
              ]}
            />
          } />
          <Route path="/services/automations-and-plugins" element={
            <Service
              title="Automations & Plugins"
              iconColor="#e7d4c8ff"
              description="Save time with smart workflow automation."
              details={[
                {
                  heading: "Workflow Automation",
                  text: "Connect your apps and automate repetitive tasks using Zapier, Make, or custom scripts.",
                  points: []
                },
                {
                  heading: "Custom Plugins",
                  text: "Tailor-made plugins for platforms like WordPress, Shopify, or your own internal tools.",
                  points: []
                }
              ]}
            />
          } />
          <Route path="/services/apis-and-integrations" element={
            <Service
              title="APIs & Integrations"
              iconColor="#7b61ff"
              description="Connect your tools and scale your stack."
              details={[
                {
                  heading: "Third-Party Integrations",
                  text: "Seamlessly connect your application with external services like Stripe, Twilio, or Salesforce.",
                  points: []
                },
                {
                  heading: "Custom API Development",
                  text: "Build robust, secure APIs to expose your data and services to partners or other applications.",
                  points: []
                }
              ]}
            />
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Optional: 404 page */}
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes>
        </div>
      </main>
      
      <Footer/>
    </div>
  );
};

export default App;