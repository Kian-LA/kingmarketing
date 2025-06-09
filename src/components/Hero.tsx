import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

const Hero = () => {
  const clientLogos = [
    'Nike', 'Apple', 'Google', 'Microsoft', 'Amazon', 'Tesla'
  ];

  const stats = [
    { icon: TrendingUp, value: '300%', label: 'ROI Increase' },
    { icon: Users, value: '500+', label: 'Campaigns' },
    { icon: Award, value: '#1', label: 'Agency 2024' },
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
            {/* Compact Stats */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="w-4 h-4 text-red-600" />
                    </div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Advanced Workflow Automation Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-2xl border border-red-100 dark:border-red-800/30">
                <div className="text-center mb-6">
                  <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">Smart Marketing Automation</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Real-time triggers that drive conversions</div>
                </div>

                {/* Workflow Steps */}
                <div className="space-y-6">
                  {/* Step 1: Facebook Ad Trigger */}
                  <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center animate-pulse">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">Facebook Ad Click</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">User clicks on targeted ad campaign</div>
                    </div>
                    <div className="text-green-600 font-bold text-sm">TRIGGER</div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-red-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  {/* Step 2: AI Processing */}
                  <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">AI Agent Analyzes</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Evaluates user behavior & intent</div>
                    </div>
                    <div className="text-purple-600 font-bold text-sm">PROCESS</div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-red-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  {/* Step 3: SMS Action */}
                  <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">Personalized SMS Sent</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Custom offer delivered instantly</div>
                    </div>
                    <div className="text-orange-600 font-bold text-sm">ACTION</div>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800/30">
                    <div className="flex items-center justify-center space-x-6 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">85%</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">Open Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">42%</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">Conversion</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">3.2x</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">ROI</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Automation Badge */}
                <div className="absolute -top-3 -right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  LIVE
                </div>
              </div>
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