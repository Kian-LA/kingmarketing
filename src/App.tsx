import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import SchemaMarkup from './components/SchemaMarkup';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import FreeAuditPage from './pages/FreeAuditPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import CareersPage from './pages/CareersPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import MarketingGuidesPage from './pages/MarketingGuidesPage';
import IndustryReportsPage from './pages/IndustryReportsPage';
import WebinarsPage from './pages/WebinarsPage';
import TemplatesPage from './pages/TemplatesPage';
import ROICalculatorPage from './pages/ROICalculatorPage';

function App() {
  return (
    <ThemeProvider>
      <SEOHead />
      <SchemaMarkup type="organization" data={{}} />
      <SchemaMarkup type="website" data={{}} />
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Hero />
                <Services />
                <CaseStudies />
                <Testimonials />
                <Blog />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/free-audit" element={<FreeAuditPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/resources/guides" element={<MarketingGuidesPage />} />
            <Route path="/resources/reports" element={<IndustryReportsPage />} />
            <Route path="/resources/webinars" element={<WebinarsPage />} />
            <Route path="/resources/templates" element={<TemplatesPage />} />
            <Route path="/resources/calculator" element={<ROICalculatorPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;