import React, { useState } from 'react';
import { FileText, Download, Search, Filter, Star, Eye, Copy, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TemplatesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Email Templates', 'Landing Pages', 'Social Media', 'Ad Copy', 'Reports', 'Proposals'];

  const templates = [
    {
      id: 1,
      title: 'High-Converting Email Sequence Templates',
      description: 'Complete set of 12 email templates for welcome series, nurture campaigns, and sales sequences that convert at 25%+ rates.',
      category: 'Email Templates',
      downloads: '15.2K',
      rating: 4.9,
      preview: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      includes: ['Welcome Series (5 emails)', 'Nurture Campaign (4 emails)', 'Sales Sequence (3 emails)', 'Subject Line Library', 'A/B Test Variations'],
      format: 'HTML + Text',
      type: 'Premium'
    },
    {
      id: 2,
      title: 'Landing Page Templates Pack',
      description: 'Professional landing page templates optimized for conversions. Includes lead magnets, sales pages, and webinar registration pages.',
      category: 'Landing Pages',
      downloads: '12.8K',
      rating: 4.8,
      preview: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      includes: ['Lead Magnet Pages (3)', 'Sales Pages (2)', 'Webinar Registration (2)', 'Thank You Pages (2)', 'Mobile Responsive'],
      format: 'HTML/CSS',
      type: 'Premium'
    },
    {
      id: 3,
      title: 'Social Media Content Calendar',
      description: 'Complete social media planning templates with content ideas, posting schedules, and engagement strategies for all major platforms.',
      category: 'Social Media',
      downloads: '9.5K',
      rating: 4.7,
      preview: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      includes: ['Monthly Calendar Template', 'Content Ideas Bank (100+)', 'Hashtag Research Sheet', 'Analytics Tracking', 'Platform Guidelines'],
      format: 'Excel + Google Sheets',
      type: 'Free'
    },
    {
      id: 4,
      title: 'Google Ads Copy Templates',
      description: 'Proven ad copy templates for Google Ads that have generated millions in revenue. Includes headlines, descriptions, and extensions.',
      category: 'Ad Copy',
      downloads: '11.3K',
      rating: 4.9,
      preview: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      includes: ['Search Ad Templates (20)', 'Display Ad Copy (15)', 'Shopping Ad Descriptions', 'Ad Extensions Library', 'A/B Test Framework'],
      format: 'Google Sheets',
      type: 'Premium'
    },
    {
      id: 5,
      title: 'Marketing Report Templates',
      description: 'Professional marketing report templates for client presentations, monthly reviews, and campaign performance analysis.',
      category: 'Reports',
      downloads: '7.9K',
      rating: 4.6,
      preview: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      includes: ['Monthly Report Template', 'Campaign Analysis', 'ROI Dashboard', 'Executive Summary', 'Data Visualization'],
      format: 'PowerPoint + PDF',
      type: 'Premium'
    },
    {
      id: 6,
      title: 'Marketing Proposal Template',
      description: 'Complete marketing proposal template that wins clients. Includes pricing tables, service descriptions, and case studies.',
      category: 'Proposals',
      downloads: '6.2K',
      rating: 4.8,
      preview: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      includes: ['Proposal Template', 'Pricing Tables', 'Service Descriptions', 'Case Study Format', 'Contract Template'],
      format: 'Word + PDF',
      type: 'Free'
    },
    {
      id: 7,
      title: 'Facebook Ad Creative Templates',
      description: 'High-performing Facebook and Instagram ad creative templates with proven copy and design elements that drive results.',
      category: 'Ad Copy',
      downloads: '13.7K',
      rating: 4.7,
      preview: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      includes: ['Image Ad Templates (25)', 'Video Ad Scripts (10)', 'Carousel Ad Copy', 'Story Ad Templates', 'Audience Targeting Guide'],
      format: 'Canva + Text',
      type: 'Premium'
    },
    {
      id: 8,
      title: 'Email Newsletter Templates',
      description: 'Beautiful email newsletter templates for different industries. Fully customizable and mobile-responsive designs.',
      category: 'Email Templates',
      downloads: '8.4K',
      rating: 4.5,
      preview: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      includes: ['Newsletter Templates (8)', 'Industry Variations', 'Mobile Responsive', 'Brand Customization', 'Content Blocks'],
      format: 'HTML + Mailchimp',
      type: 'Free'
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { number: '50+', label: 'Templates Available' },
    { number: '100K+', label: 'Downloads' },
    { number: '4.8', label: 'Average Rating' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-semibold mb-6">
              📄 Marketing Templates
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Marketing Templates &
              <span className="text-orange-600"> Resources</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Save time and boost results with our collection of proven marketing templates. From email campaigns to landing pages, we've got you covered.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredTemplates.map((template) => (
              <div key={template.id} className={`group cursor-pointer ${
                template.featured ? 'lg:col-span-2' : ''
              }`}>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className={`flex ${template.featured ? 'flex-col lg:flex-row' : 'flex-col'} h-full`}>
                    <div className={`relative ${template.featured ? 'lg:w-1/2' : ''}`}>
                      <img 
                        src={template.preview} 
                        alt={template.title}
                        className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                          template.featured ? 'h-64 lg:h-full' : 'h-48'
                        }`}
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          template.type === 'Premium' ? 'bg-orange-600 text-white' : 'bg-green-600 text-white'
                        }`}>
                          {template.type}
                        </span>
                      </div>
                      {template.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Popular
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex space-x-3">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            <Eye className="w-6 h-6 text-gray-900" />
                          </div>
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            <Download className="w-6 h-6 text-gray-900" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`p-6 flex-1 ${template.featured ? 'lg:w-1/2' : ''}`}>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <FileText size={14} />
                          <span>{template.format}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download size={14} />
                          <span>{template.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star size={14} className="text-yellow-500" />
                          <span>{template.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className={`font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 transition-colors ${
                        template.featured ? 'text-2xl lg:text-3xl' : 'text-xl'
                      }`}>
                        {template.title}
                      </h3>
                      
                      <p className={`text-gray-600 dark:text-gray-300 mb-4 ${
                        template.featured ? 'text-lg' : ''
                      }`}>
                        {template.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What's Included:</h4>
                        <ul className="space-y-1">
                          {template.includes.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-3">
                        <button className="flex-1 bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-semibold flex items-center justify-center">
                          <Download className="mr-2" size={16} />
                          {template.type === 'Free' ? 'Download Free' : 'Get Template'}
                        </button>
                        <button className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                          <Eye size={16} />
                        </button>
                        <button className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                          <Copy size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <FileText size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No templates found</h3>
              <p className="text-gray-600 dark:text-gray-300">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Custom Templates?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get custom templates designed specifically for your business needs and brand guidelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold text-lg">
                Request Custom Templates
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-200 font-bold text-lg">
                View All Templates
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TemplatesPage;