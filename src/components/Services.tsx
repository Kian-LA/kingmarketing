import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Target, BarChart3, Megaphone, Mail, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Marketing',
      description: 'Dominate Google with our proven SEO and PPC strategies that drive qualified traffic and conversions.',
      features: ['Google Ads Management', 'SEO Optimization', 'Local Search', 'Analytics & Reporting'],
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Target,
      title: 'Social Media Advertising',
      description: 'Reach your ideal customers on Facebook, Instagram, and LinkedIn with laser-targeted campaigns.',
      features: ['Facebook Ads', 'Instagram Marketing', 'LinkedIn Campaigns', 'Creative Development'],
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: BarChart3,
      title: 'Conversion Optimization',
      description: 'Turn more visitors into customers with our data-driven approach to website optimization.',
      features: ['A/B Testing', 'Landing Pages', 'Funnel Analysis', 'UX Optimization'],
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Megaphone,
      title: 'Brand Strategy',
      description: 'Build a powerful brand that stands out and connects with your target audience.',
      features: ['Brand Positioning', 'Content Strategy', 'Creative Direction', 'Brand Guidelines'],
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and drive repeat sales with personalized email campaigns that convert.',
      features: ['Automation Setup', 'List Building', 'Campaign Design', 'Performance Tracking'],
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile Marketing',
      description: 'Reach customers on mobile with app marketing, SMS campaigns, and mobile-optimized experiences.',
      features: ['App Store Optimization', 'SMS Marketing', 'Mobile Ads', 'App Marketing'],
      color: 'bg-indigo-50 text-indigo-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to 
            <span className="text-red-600"> Dominate Your Market</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital marketing services designed to help your business grow, scale, and thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gray-900 dark:bg-gray-700 text-white py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 font-semibold">
                <Link to="/free-audit" className="block w-full h-full">
                  Learn More
                </Link>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">Ready to get started? Let's discuss your project.</p>
          <Link 
            to="/services"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-bold text-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;