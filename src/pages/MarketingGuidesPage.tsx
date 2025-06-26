import React, { useState } from 'react';
import { BookOpen, Download, Clock, User, Search, Filter, Star, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MarketingGuidesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'SEO', 'PPC', 'Social Media', 'Email Marketing', 'Content Marketing', 'Analytics'];

  const guides = [
    {
      id: 1,
      title: 'The Complete Guide to Google Ads in 2024',
      description: 'Master Google Ads with our comprehensive 50-page guide covering everything from setup to advanced optimization strategies.',
      category: 'PPC',
      pages: 50,
      downloadCount: '12.5K',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      topics: ['Campaign Setup', 'Keyword Research', 'Ad Copy', 'Bidding Strategies', 'Optimization']
    },
    {
      id: 2,
      title: 'SEO Mastery: From Beginner to Expert',
      description: 'Learn how to rank #1 on Google with our step-by-step SEO guide that covers technical SEO, content optimization, and link building.',
      category: 'SEO',
      pages: 75,
      downloadCount: '18.2K',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      topics: ['Technical SEO', 'On-Page Optimization', 'Link Building', 'Local SEO', 'SEO Tools']
    },
    {
      id: 3,
      title: 'Social Media Marketing Playbook',
      description: 'Build a powerful social media presence with proven strategies for Facebook, Instagram, LinkedIn, and TikTok.',
      category: 'Social Media',
      pages: 40,
      downloadCount: '9.8K',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      topics: ['Content Strategy', 'Platform Optimization', 'Paid Social', 'Community Building', 'Analytics']
    },
    {
      id: 4,
      title: 'Email Marketing Automation Blueprint',
      description: 'Create email campaigns that convert with our comprehensive guide to automation, segmentation, and personalization.',
      category: 'Email Marketing',
      pages: 35,
      downloadCount: '7.3K',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      topics: ['Automation Workflows', 'List Building', 'Segmentation', 'A/B Testing', 'Deliverability']
    },
    {
      id: 5,
      title: 'Content Marketing Strategy Guide',
      description: 'Develop a content strategy that drives traffic, generates leads, and builds brand authority in your industry.',
      category: 'Content Marketing',
      pages: 45,
      downloadCount: '11.1K',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      topics: ['Content Planning', 'SEO Content', 'Video Marketing', 'Content Distribution', 'Performance Tracking']
    },
    {
      id: 6,
      title: 'Marketing Analytics & Reporting',
      description: 'Turn data into actionable insights with our guide to marketing analytics, attribution, and performance measurement.',
      category: 'Analytics',
      pages: 55,
      downloadCount: '6.7K',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      topics: ['Google Analytics', 'Attribution Models', 'KPI Tracking', 'Dashboard Creation', 'ROI Measurement']
    }
  ];

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-6">
              📚 Free Marketing Guides
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Marketing Guides &
              <span className="text-blue-600"> Resources</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Download our comprehensive marketing guides and learn the strategies that have helped our clients achieve extraordinary growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Expert Knowledge</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Guides written by industry experts with proven track records</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Download className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Instant Download</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Get immediate access to all guides - no waiting required</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Actionable Strategies</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Step-by-step instructions you can implement immediately</p>
              </div>
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
                placeholder="Search guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
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

      {/* Guides Grid */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredGuides.map((guide) => (
              <div key={guide.id} className={`group cursor-pointer ${
                guide.featured ? 'lg:col-span-2' : ''
              }`}>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className={`flex ${guide.featured ? 'flex-col lg:flex-row' : 'flex-col'} h-full`}>
                    <div className={`relative ${guide.featured ? 'lg:w-1/2' : ''}`}>
                      <img 
                        src={guide.image} 
                        alt={guide.title}
                        className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                          guide.featured ? 'h-64 lg:h-full' : 'h-48'
                        }`}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {guide.category}
                        </span>
                      </div>
                      {guide.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className={`p-6 flex-1 ${guide.featured ? 'lg:w-1/2' : ''}`}>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <BookOpen size={14} />
                          <span>{guide.pages} pages</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download size={14} />
                          <span>{guide.downloadCount} downloads</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star size={14} className="text-yellow-500" />
                          <span>{guide.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className={`font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors ${
                        guide.featured ? 'text-2xl lg:text-3xl' : 'text-xl'
                      }`}>
                        {guide.title}
                      </h3>
                      
                      <p className={`text-gray-600 dark:text-gray-300 mb-4 ${
                        guide.featured ? 'text-lg' : ''
                      }`}>
                        {guide.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What's Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {guide.topics.map((topic, idx) => (
                            <span key={idx} className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold flex items-center justify-center">
                        Download Free Guide
                        <Download className="ml-2" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredGuides.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No guides found</h3>
              <p className="text-gray-600 dark:text-gray-300">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Implement These Strategies?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get personalized help implementing these strategies for your business with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/free-audit"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold text-lg"
              >
                Get Free Strategy Call
              </Link>
              <Link 
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-bold text-lg"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketingGuidesPage;