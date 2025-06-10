import React, { useState } from 'react';
import { Calendar, User, Clock, Search, Tag } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Strategy', 'Paid Ads', 'SEO', 'CRO', 'Social Media', 'Email Marketing'];

  const blogPosts = [
    {
      id: 1,
      title: '10 Digital Marketing Trends That Will Dominate 2024',
      excerpt: 'Stay ahead of the competition with these cutting-edge marketing strategies that are reshaping the industry. From AI-powered personalization to voice search optimization.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Strategy',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'How to Increase Your ROI by 300% with Facebook Ads',
      excerpt: 'Learn the exact strategies we use to help our clients achieve incredible returns on their Facebook advertising spend. Includes real case studies and actionable tips.',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Paid Ads',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 3,
      title: 'The Complete Guide to Conversion Rate Optimization',
      excerpt: 'Transform your website into a conversion machine with these proven CRO techniques and best practices. Step-by-step implementation guide included.',
      author: 'Dr. Amanda Rodriguez',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'CRO',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 4,
      title: 'SEO in 2024: What Really Works Now',
      excerpt: 'Google\'s algorithm has evolved significantly. Here\'s what you need to know to rank higher and drive more organic traffic to your website.',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'SEO',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 5,
      title: 'Email Marketing Automation That Actually Converts',
      excerpt: 'Build email sequences that nurture leads and drive sales on autopilot. Includes templates and automation workflows that we use for our clients.',
      author: 'Lisa Wang',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Email Marketing',
      image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 6,
      title: 'Social Media Strategy for B2B Companies',
      excerpt: 'How to leverage LinkedIn, Twitter, and other platforms to generate high-quality leads for your B2B business. Real examples and proven tactics.',
      author: 'James Rodriguez',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Social Media',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 7,
      title: 'The Psychology of High-Converting Landing Pages',
      excerpt: 'Understand the psychological triggers that make visitors take action. Learn how to design landing pages that convert at 25%+ rates.',
      author: 'Dr. Amanda Rodriguez',
      date: '2024-01-01',
      readTime: '11 min read',
      category: 'CRO',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 8,
      title: 'Google Ads vs Facebook Ads: Which is Better for Your Business?',
      excerpt: 'A comprehensive comparison of the two biggest advertising platforms. Learn which one to choose based on your business goals and target audience.',
      author: 'Michael Chen',
      date: '2023-12-28',
      readTime: '8 min read',
      category: 'Paid Ads',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEOHead 
        title="Marketing Blog | Expert Insights & Strategies | Logical Marketing"
        description="Stay ahead with actionable marketing insights, proven strategies, and industry trends from our team of experts. Latest digital marketing tips and guides."
        keywords="marketing blog, digital marketing insights, marketing strategies, SEO tips, PPC guides, social media marketing"
        url="https://logicalmarketing.com/blog"
        type="blog"
      />
      <SchemaMarkup 
        type="website" 
        data={{
          name: "Logical Marketing Blog",
          description: "Marketing insights and expert strategies"
        }} 
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-6">
              Marketing Blog
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Marketing Insights &
              <span className="text-red-600"> Expert Strategies</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Stay ahead of the curve with actionable marketing insights, proven strategies, and industry trends from our team of experts.
            </p>
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
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
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

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Tag size={12} className="mr-1" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                      <span>Read Article</span>
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-300">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Never Miss a Marketing Insight
            </h3>
            <p className="text-red-100 mb-8">
              Get our latest articles, case studies, and marketing tips delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
            <p className="text-red-200 text-sm mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;