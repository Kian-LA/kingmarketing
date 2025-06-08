import React from 'react';
import { Search, Target, BarChart3, Megaphone, Mail, Smartphone, CheckCircle, ArrowRight, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const services = [
    {
      id: 'search-engine-marketing',
      icon: Search,
      title: 'Search Engine Marketing',
      subtitle: 'Dominate Google & Drive Qualified Traffic',
      description: 'Get your business found by customers actively searching for your products or services. Our comprehensive SEM strategies combine the power of SEO and PPC to maximize your online visibility and drive high-converting traffic.',
      features: [
        'Google Ads Management & Optimization',
        'Search Engine Optimization (SEO)',
        'Local Search Optimization',
        'Keyword Research & Strategy',
        'Landing Page Optimization',
        'Conversion Tracking & Analytics'
      ],
      benefits: [
        'Increase qualified website traffic by 300%+',
        'Improve search rankings for target keywords',
        'Reduce cost-per-click by up to 40%',
        'Generate more leads and sales'
      ],
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-blue-50 text-blue-600',
      stats: { metric: '300%', label: 'Traffic Increase' }
    },
    {
      id: 'social-media-advertising',
      icon: Target,
      title: 'Social Media Advertising',
      subtitle: 'Reach Your Ideal Customers Where They Spend Time',
      description: 'Connect with your target audience on Facebook, Instagram, LinkedIn, and other social platforms. Our data-driven approach ensures your ads reach the right people at the right time with compelling creative that converts.',
      features: [
        'Facebook & Instagram Ads',
        'LinkedIn Advertising',
        'Twitter & TikTok Campaigns',
        'Creative Development & Testing',
        'Audience Research & Targeting',
        'Social Media Strategy'
      ],
      benefits: [
        'Reach highly targeted audiences',
        'Increase brand awareness by 250%+',
        'Generate quality leads at lower costs',
        'Build engaged social communities'
      ],
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-purple-50 text-purple-600',
      stats: { metric: '450%', label: 'ROAS Improvement' }
    },
    {
      id: 'conversion-optimization',
      icon: BarChart3,
      title: 'Conversion Optimization',
      subtitle: 'Turn More Visitors Into Paying Customers',
      description: 'Maximize the value of your existing traffic with our proven conversion optimization strategies. We use data-driven testing and user experience improvements to dramatically increase your conversion rates.',
      features: [
        'A/B Testing & Multivariate Testing',
        'Landing Page Optimization',
        'Funnel Analysis & Optimization',
        'User Experience (UX) Improvements',
        'Heat Mapping & User Behavior Analysis',
        'Conversion Rate Audits'
      ],
      benefits: [
        'Increase conversion rates by 200%+',
        'Improve customer lifetime value',
        'Reduce bounce rates significantly',
        'Maximize ROI from existing traffic'
      ],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-green-50 text-green-600',
      stats: { metric: '340%', label: 'Conversion Increase' }
    },
    {
      id: 'brand-strategy',
      icon: Megaphone,
      title: 'Brand Strategy',
      subtitle: 'Build a Powerful Brand That Stands Out',
      description: 'Develop a compelling brand identity that resonates with your target audience and differentiates you from competitors. Our strategic approach ensures your brand communicates value and builds lasting customer relationships.',
      features: [
        'Brand Positioning & Messaging',
        'Content Strategy & Planning',
        'Creative Direction & Design',
        'Brand Guidelines Development',
        'Competitive Analysis',
        'Brand Voice & Tone Development'
      ],
      benefits: [
        'Establish strong market positioning',
        'Increase brand recognition by 180%+',
        'Build customer loyalty and trust',
        'Command premium pricing'
      ],
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-orange-50 text-orange-600',
      stats: { metric: '180%', label: 'Brand Recognition' }
    },
    {
      id: 'email-marketing',
      icon: Mail,
      title: 'Email Marketing',
      subtitle: 'Nurture Leads & Drive Repeat Sales',
      description: 'Build lasting relationships with your customers through personalized email campaigns that deliver value and drive conversions. Our automation strategies work 24/7 to nurture leads and increase customer lifetime value.',
      features: [
        'Email Automation & Workflows',
        'List Building & Segmentation',
        'Campaign Design & Development',
        'Personalization & Dynamic Content',
        'Performance Tracking & Analytics',
        'Deliverability Optimization'
      ],
      benefits: [
        'Increase email open rates by 40%+',
        'Generate 25% more repeat purchases',
        'Automate lead nurturing processes',
        'Improve customer retention rates'
      ],
      image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-red-50 text-red-600',
      stats: { metric: '25%', label: 'More Repeat Sales' }
    },
    {
      id: 'mobile-marketing',
      icon: Smartphone,
      title: 'Mobile Marketing',
      subtitle: 'Reach Customers on Their Mobile Devices',
      description: 'Optimize your marketing for the mobile-first world. From app marketing to SMS campaigns and mobile-optimized experiences, we help you connect with customers wherever they are.',
      features: [
        'App Store Optimization (ASO)',
        'SMS Marketing Campaigns',
        'Mobile App Marketing',
        'Mobile-First Website Design',
        'Push Notification Strategies',
        'Mobile Analytics & Tracking'
      ],
      benefits: [
        'Increase mobile conversions by 220%+',
        'Improve app download rates',
        'Reach customers instantly via SMS',
        'Enhance mobile user experience'
      ],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-indigo-50 text-indigo-600',
      stats: { metric: '220%', label: 'Mobile Conversions' }
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-6">
              Our Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Everything You Need to
              <span className="text-red-600"> Dominate Your Market</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Comprehensive digital marketing services designed to help your business grow, scale, and thrive in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-20 ${
          index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'
        }`}>
          <div className="container mx-auto px-6">
            <div className={`flex flex-col lg:flex-row gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-6 left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                        <service.icon size={24} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{service.stats.metric}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{service.stats.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div>
                  <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h2>
                  <h3 className="text-xl text-red-600 font-semibold mb-4">{service.subtitle}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What's Included:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold flex items-center justify-center">
                    Get Started Today
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                  <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:border-red-600 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200 font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Let's discuss which services are right for your business and create a custom strategy that delivers results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold text-lg">
                Get Free Strategy Call
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-200 font-bold text-lg">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;