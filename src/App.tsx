import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
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
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;