// src/App.tsx (REVISED FOR MULTI-PAGE ROUTING)

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 👈 NEW: Import for routing
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/main.css';

// Import all required page components (you'll create the others next)
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage'; // Future components
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Header and Footer are outside Routes so they appear on ALL pages */}
      <Header />
      
      <main>
        <Routes>
          {/* 1. Map the root URL to the combined home page content */}
          <Route path="/" element={<HomePage />} />
          
          {/* 2. Map future pages to their paths */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Optional: 404 page */}
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </main>
      
      <Footer/>
    </div>
  );
};

export default App;