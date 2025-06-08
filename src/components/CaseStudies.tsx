import React from 'react';
import { ArrowUpRight, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: 'TechStart Pro',
      industry: 'SaaS',
      challenge: 'Low conversion rates and high customer acquisition costs',
      solution: 'Complete funnel optimization and targeted PPC campaigns',
      results: [
        { icon: TrendingUp, metric: '340%', label: 'Conversion Rate Increase' },
        { icon: DollarSign, metric: '$2.4M', label: 'Additional Revenue' },
        { icon: Users, metric: '85%', label: 'Lower CAC' },
      ],
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      company: 'EcoShop',
      industry: 'E-commerce',
      challenge: 'Struggling to scale beyond $100K monthly revenue',
      solution: 'Multi-channel advertising strategy with creative optimization',
      results: [
        { icon: DollarSign, metric: '$1.2M', label: 'Monthly Revenue' },
        { icon: TrendingUp, metric: '450%', label: 'ROAS Improvement' },
        { icon: Users, metric: '12x', label: 'Customer Growth' },
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      company: 'MedCare Plus',
      industry: 'Healthcare',
      challenge: 'Need to increase patient bookings and brand awareness',
      solution: 'Local SEO optimization and targeted social media campaigns',
      results: [
        { icon: Users, metric: '280%', label: 'Patient Bookings' },
        { icon: TrendingUp, metric: '95%', label: 'Local Visibility' },
        { icon: DollarSign, metric: '$800K', label: 'Revenue Growth' },
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-4">
            Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Real Results for 
            <span className="text-red-600"> Real Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's how we've helped businesses like yours achieve extraordinary growth.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src={study.image} 
                    alt={study.company}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-red-600 font-semibold">{study.industry}</span>
                    <ArrowUpRight size={16} className="text-red-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{study.company}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge:</h4>
                    <p className="text-gray-600 dark:text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution:</h4>
                    <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <result.icon className="w-6 h-6 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{result.metric}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{result.label}</div>
                    </div>
                  ))}
                </div>

                <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold flex items-center">
                  View Full Case Study
                  <ArrowUpRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-gray-50 dark:bg-gray-700 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Be Our Next Success Story?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Let's discuss how we can help you achieve similar results.</p>
          <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-bold">
            Schedule Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;