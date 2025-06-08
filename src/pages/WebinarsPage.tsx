import React, { useState } from 'react';
import { Video, Calendar, Clock, Users, Play, Star, Filter, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WebinarsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = ['All', 'Upcoming', 'On-Demand', 'Live'];

  const webinars = [
    {
      id: 1,
      title: 'Advanced Google Ads Strategies for 2024',
      description: 'Learn cutting-edge Google Ads techniques that are driving 300%+ ROI for our clients. Includes live Q&A and exclusive strategies.',
      presenter: 'Michael Chen',
      presenterTitle: 'Head of Paid Advertising',
      presenterImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      attendees: 1250,
      rating: 4.9,
      type: 'Upcoming',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      topics: ['Smart Bidding', 'Audience Targeting', 'Ad Extensions', 'Performance Max', 'Attribution']
    },
    {
      id: 2,
      title: 'SEO Mastery: Ranking #1 in 2024',
      description: 'Discover the latest SEO strategies that are working right now. From technical SEO to content optimization and link building.',
      presenter: 'David Kim',
      presenterTitle: 'Senior SEO Specialist',
      presenterImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-02-08',
      time: '1:00 PM EST',
      duration: '75 minutes',
      attendees: 980,
      rating: 4.8,
      type: 'On-Demand',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      topics: ['Technical SEO', 'Content Strategy', 'Link Building', 'Local SEO', 'Core Web Vitals']
    },
    {
      id: 3,
      title: 'Social Media Marketing That Converts',
      description: 'Transform your social media presence into a lead generation machine. Real strategies, real results, real case studies.',
      presenter: 'Lisa Wang',
      presenterTitle: 'Social Media Manager',
      presenterImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-02-22',
      time: '3:00 PM EST',
      duration: '45 minutes',
      attendees: 750,
      rating: 4.7,
      type: 'Upcoming',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      topics: ['Content Strategy', 'Paid Social', 'Community Building', 'Influencer Marketing', 'Analytics']
    },
    {
      id: 4,
      title: 'Email Marketing Automation Masterclass',
      description: 'Build email sequences that sell while you sleep. Advanced automation strategies for maximum ROI.',
      presenter: 'James Rodriguez',
      presenterTitle: 'Email Marketing Specialist',
      presenterImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-01-25',
      time: '2:30 PM EST',
      duration: '90 minutes',
      attendees: 1100,
      rating: 4.9,
      type: 'On-Demand',
      image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      topics: ['Automation Workflows', 'Segmentation', 'Personalization', 'A/B Testing', 'Deliverability']
    },
    {
      id: 5,
      title: 'Conversion Rate Optimization Secrets',
      description: 'Double your conversion rates with proven CRO techniques. Includes live website audits and optimization strategies.',
      presenter: 'Dr. Amanda Rodriguez',
      presenterTitle: 'Director of Analytics',
      presenterImage: 'https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-03-01',
      time: '1:30 PM EST',
      duration: '60 minutes',
      attendees: 0,
      rating: 0,
      type: 'Upcoming',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      topics: ['A/B Testing', 'User Experience', 'Landing Pages', 'Psychology', 'Analytics']
    },
    {
      id: 6,
      title: 'Marketing Analytics & Attribution',
      description: 'Master marketing measurement and attribution. Turn data into actionable insights that drive growth.',
      presenter: 'Dr. Amanda Rodriguez',
      presenterTitle: 'Director of Analytics',
      presenterImage: 'https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-01-18',
      time: '2:00 PM EST',
      duration: '75 minutes',
      attendees: 850,
      rating: 4.8,
      type: 'On-Demand',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      topics: ['Attribution Models', 'Google Analytics', 'Data Visualization', 'ROI Measurement', 'Reporting']
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesFilter = selectedFilter === 'All' || webinar.type === selectedFilter;
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const upcomingCount = webinars.filter(w => w.type === 'Upcoming').length;
  const onDemandCount = webinars.filter(w => w.type === 'On-Demand').length;
  const totalAttendees = webinars.reduce((sum, w) => sum + w.attendees, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold mb-6">
              🎥 Free Marketing Webinars
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Marketing Webinars &
              <span className="text-green-600"> Expert Training</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join our live webinars and access our on-demand library to learn from marketing experts and grow your business.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Video className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{upcomingCount} Upcoming</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Live webinars with Q&A sessions</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Play className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{onDemandCount} On-Demand</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Watch anytime, anywhere</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{totalAttendees.toLocaleString()}+ Attendees</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Join our growing community</p>
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
                placeholder="Search webinars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    selectedFilter === filter
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredWebinars.map((webinar) => (
              <div key={webinar.id} className={`group cursor-pointer ${
                webinar.featured ? 'lg:col-span-2' : ''
              }`}>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className={`flex ${webinar.featured ? 'flex-col lg:flex-row' : 'flex-col'} h-full`}>
                    <div className={`relative ${webinar.featured ? 'lg:w-1/2' : ''}`}>
                      <img 
                        src={webinar.image} 
                        alt={webinar.title}
                        className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                          webinar.featured ? 'h-64 lg:h-full' : 'h-48'
                        }`}
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          webinar.type === 'Upcoming' ? 'bg-green-600 text-white' :
                          webinar.type === 'Live' ? 'bg-red-600 text-white' :
                          'bg-blue-600 text-white'
                        }`}>
                          {webinar.type}
                        </span>
                      </div>
                      {webinar.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-gray-900 ml-1" />
                        </div>
                      </div>
                    </div>
                    
                    <div className={`p-6 flex-1 ${webinar.featured ? 'lg:w-1/2' : ''}`}>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{new Date(webinar.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{webinar.duration}</span>
                        </div>
                        {webinar.attendees > 0 && (
                          <div className="flex items-center space-x-1">
                            <Users size={14} />
                            <span>{webinar.attendees.toLocaleString()}</span>
                          </div>
                        )}
                        {webinar.rating > 0 && (
                          <div className="flex items-center space-x-1">
                            <Star size={14} className="text-yellow-500" />
                            <span>{webinar.rating}</span>
                          </div>
                        )}
                      </div>
                      
                      <h3 className={`font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 transition-colors ${
                        webinar.featured ? 'text-2xl lg:text-3xl' : 'text-xl'
                      }`}>
                        {webinar.title}
                      </h3>
                      
                      <p className={`text-gray-600 dark:text-gray-300 mb-4 ${
                        webinar.featured ? 'text-lg' : ''
                      }`}>
                        {webinar.description}
                      </p>
                      
                      <div className="flex items-center space-x-3 mb-4">
                        <img 
                          src={webinar.presenterImage} 
                          alt={webinar.presenter}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">{webinar.presenter}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{webinar.presenterTitle}</div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Topics Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {webinar.topics.map((topic, idx) => (
                            <span key={idx} className="bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        {webinar.type === 'Upcoming' ? (
                          <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
                            Register Free
                          </button>
                        ) : (
                          <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold flex items-center justify-center">
                            <Play className="mr-2" size={16} />
                            Watch Now
                          </button>
                        )}
                        <button className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                          <Calendar size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredWebinars.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Video size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No webinars found</h3>
              <p className="text-gray-600 dark:text-gray-300">Try adjusting your search terms or filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Want to Host a Webinar?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Share your expertise with our community or request a custom training session for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold text-lg">
                Propose a Topic
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200 font-bold text-lg">
                Request Custom Training
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebinarsPage;