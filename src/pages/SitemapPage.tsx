import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, FileText, Users, Briefcase, BookOpen, Calculator } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SitemapPage = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: FileText,
      links: [
        { name: 'Home', url: '/', description: 'Digital marketing agency homepage' },
        { name: 'Services', url: '/services', description: 'Our digital marketing services' },
        { name: 'Case Studies', url: '/case-studies', description: 'Client success stories and results' },
        { name: 'Free Audit', url: '/free-audit', description: 'Get a free marketing audit' },
        { name: 'About Us', url: '/about', description: 'Learn about our company and mission' },
        { name: 'Team', url: '/team', description: 'Meet our marketing experts' },
        { name: 'Careers', url: '/careers', description: 'Join our growing team' },
      ]
    },
    {
      title: 'Blog & Content',
      icon: BookOpen,
      links: [
        { name: 'Blog', url: '/blog', description: 'Marketing insights and expert tips' },
        { name: 'Digital Marketing Trends 2024', url: '/blog/digital-marketing-trends-2024', description: '10 trends that will dominate 2024' },
        { name: 'Facebook Ads ROI Guide', url: '/blog/facebook-ads-roi-guide', description: 'Increase ROI by 300% with Facebook Ads' },
        { name: 'Conversion Rate Optimization', url: '/blog/conversion-rate-optimization-guide', description: 'Complete CRO guide and best practices' },
        { name: 'SEO Guide 2024', url: '/blog/seo-guide-2024', description: 'What really works in SEO now' },
        { name: 'Email Marketing Automation', url: '/blog/email-marketing-automation', description: 'Email sequences that convert' },
        { name: 'Social Media Strategy', url: '/blog/social-media-strategy', description: 'B2B social media strategies' },
        { name: 'Landing Page Psychology', url: '/blog/landing-page-psychology', description: 'Psychology of high-converting pages' },
        { name: 'Google Ads vs Facebook Ads', url: '/blog/google-ads-vs-facebook-ads', description: 'Platform comparison guide' },
      ]
    },
    {
      title: 'Resources',
      icon: Calculator,
      links: [
        { name: 'Marketing Guides', url: '/resources/guides', description: 'Free marketing guides and resources' },
        { name: 'Industry Reports', url: '/resources/reports', description: 'Latest industry insights and data' },
        { name: 'Webinars', url: '/resources/webinars', description: 'Expert training and live sessions' },
        { name: 'Templates', url: '/resources/templates', description: 'Marketing templates and tools' },
        { name: 'ROI Calculator', url: '/resources/calculator', description: 'Calculate your marketing ROI' },
      ]
    },
    {
      title: 'Legal & Support',
      icon: Users,
      links: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your privacy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Sitemap', url: '/sitemap', description: 'Complete site structure' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEOHead 
        title="Sitemap | Logical Marketing"
        description="Complete sitemap of Logical Marketing website including all pages, blog posts, resources, and tools."
        keywords="sitemap, website structure, navigation, logical marketing pages"
        url="https://logicalmarketing.com/sitemap"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Complete overview of all pages and resources available on our website.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {siteStructure.map((section, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="border-b border-gray-200 dark:border-gray-600 pb-4 last:border-b-0 last:pb-0">
                        <Link 
                          to={link.url}
                          className="group block hover:bg-white dark:hover:bg-gray-600 p-3 rounded-lg transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                                {link.name}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                {link.description}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-mono">
                                {link.url}
                              </p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors ml-3" />
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* XML Sitemap Link */}
            <div className="mt-16 text-center bg-red-50 dark:bg-red-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                XML Sitemap
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                For search engines and automated tools, you can access our XML sitemap.
              </p>
              <a 
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                <FileText className="w-5 h-5 mr-2" />
                View XML Sitemap
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SitemapPage;