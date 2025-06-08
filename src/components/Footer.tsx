import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin as LinkedIn, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Services: [
      'Search Engine Marketing',
      'Social Media Advertising',
      'Conversion Optimization',
      'Brand Strategy',
      'Email Marketing',
      'Mobile Marketing'
    ],
    Company: [
      'About Us',
      'Our Team',
      'Careers',
      'Case Studies',
      'Blog',
      'Contact'
    ],
    Resources: [
      'Marketing Guides',
      'Industry Reports',
      'Webinars',
      'Templates',
      'ROI Calculator',
      'Free Audit'
    ],
    Legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'GDPR Compliance'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: LinkedIn, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-2xl font-bold">KingMarketing</span>
            </div>
            
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
              We help ambitious businesses grow with data-driven marketing strategies that deliver real results. 
              Your success is our mission.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-red-500" />
                <span className="text-gray-300 dark:text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-red-500" />
                <span className="text-gray-300 dark:text-gray-400">hello@kingmarketing.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-red-500" />
                <span className="text-gray-300 dark:text-gray-400">123 Business District, New York, NY 10001</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 dark:text-gray-400 hover:text-red-500 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-700 dark:border-gray-800 pt-12 mt-12">
          <div className="bg-red-600 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h3>
            <p className="text-red-100 mb-6">Get your free marketing audit and discover how to 10x your revenue.</p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold">
              Get Free Audit Now
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 dark:border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © 2024 KingMarketing. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;