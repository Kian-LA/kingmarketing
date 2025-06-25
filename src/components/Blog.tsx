import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      slug: 'digital-marketing-trends-2024',
      title: '10 Digital Marketing Trends That Will Dominate 2024',
      excerpt: 'Stay ahead of the competition with these cutting-edge marketing strategies that are reshaping the industry.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Strategy',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      slug: 'facebook-ads-roi-guide',
      title: 'How to Increase Your ROI by 300% with Facebook Ads',
      excerpt: 'Learn the exact strategies we use to help our clients achieve incredible returns on their Facebook advertising spend.',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Paid Ads',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 3,
      slug: 'conversion-rate-optimization-guide',
      title: 'The Complete Guide to Conversion Rate Optimization',
      excerpt: 'Transform your website into a conversion machine with these proven CRO techniques and best practices.',
      author: 'Dr. Amanda Rodriguez',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'CRO',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-4">
            Latest Insights
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Marketing Insights &
            <span className="text-red-600"> Expert Tips</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest marketing insights, industry trends, and proven strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <article key={post.id} className={`group cursor-pointer ${
              index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
            }`}>
              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      index === 0 ? 'h-64 lg:h-80' : 'h-48'
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
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
                  
                  <h3 className={`font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 transition-colors ${
                    index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                  }`}>
                    {post.title}
                  </h3>
                  
                  <p className={`text-gray-600 dark:text-gray-300 mb-4 ${
                    index === 0 ? 'text-lg' : ''
                  }`}>
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-bold text-lg"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;