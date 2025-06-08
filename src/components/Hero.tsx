import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

const Hero = () => {
  const clientLogos = [
    'Nike', 'Apple', 'Google', 'Microsoft', 'Amazon', 'Tesla'
  ];

  const stats = [
    { icon: TrendingUp, value: '300%', label: 'Average ROI Increase' },
    { icon: Users, value: '500+', label: 'Successful Campaigns' },
    { icon: Award, value: '#1', label: 'Marketing Agency 2024' },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold">
                🚀 #1 Rated Marketing Agency
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Grow Your Business 
                <span className="text-red-600"> 10x Faster</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                We help ambitious businesses scale with data-driven marketing strategies that deliver real results. 
                Stop wasting money on ads that don't convert.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/free-audit"
                className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-bold text-lg flex items-center justify-center group"
              >
                Get Free Marketing Audit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg hover:border-red-600 hover:text-red-600 dark:hover:text-red-500 transition-all duration-200 font-semibold">
                View Case Studies
              </button>
            </div>

            {/* Trust Badges */}
            <div className="space-y-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide">
                Trusted by Leading Brands
              </p>
              <div className="flex flex-wrap items-center gap-8">
                {clientLogos.map((logo, index) => (
                  <div key={index} className="text-gray-400 dark:text-gray-500 font-bold text-lg hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-600 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-5 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;