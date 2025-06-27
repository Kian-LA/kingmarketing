import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';

const Hero = () => {
  const clientLogos = [
    'Nike', 'Apple', 'Google', 'Microsoft', 'Amazon', 'Tesla'
  ];

  const stats = [
    { icon: TrendingUp, value: '300%', label: 'ROI Increase' },
    { icon: Users, value: '500+', label: 'Campaigns' },
    { icon: Award, value: '#1', label: 'Agency 2024' },
  ];

  useEffect(() => {
    // Track hero section view
    if (typeof window !== 'undefined' && window._mfq) {
      window._mfq.push(['track', 'hero_section_view']);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20">
      <SchemaMarkup 
        type="organization" 
        data={{
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            "name": "Digital Marketing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Free Marketing Audit",
                  "description": "Comprehensive marketing audit worth $5,500"
                }
              }
            ]
          }
        }} 
      />
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
                onClick={() => {
                  if (typeof window !== 'undefined' && window._mfq) {
                    window._mfq.push(['track', 'hero_cta_clicked', { button: 'free_audit' }]);
                  }
                }}
                className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-bold text-lg flex items-center justify-center group"
              >
                Get Free Marketing Audit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link 
                to="/case-studies"
                onClick={() => {
                  if (typeof window !== 'undefined' && window._mfq) {
                    window._mfq.push(['track', 'hero_cta_clicked', { button: 'case_studies' }]);
                  }
                }}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg hover:border-red-600 hover:text-red-600 dark:hover:text-red-500 transition-all duration-200 font-semibold"
              >
                View Case Studies
              </Link>
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
            {/* Advanced Workflow Automation Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/40 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl border border-blue-100/50 dark:border-blue-800/30 shadow-xl backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">Smart Marketing Automation</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Real-time triggers that drive conversions</div>
                </div>

                {/* Workflow Steps */}
                <div className="space-y-4">
                  {/* Step 1: Facebook Ad Trigger */}
                  <div className="flex items-center space-x-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/50 dark:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center animate-pulse shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">Facebook Ad Click</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">User clicks on targeted ad campaign</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-sm">TRIGGER</div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  {/* Step 2: AI Processing */}
                  <div className="flex items-center space-x-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/50 dark:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">AI Agent Analyzes</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Evaluates user behavior & intent</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-sm">PROCESS</div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  {/* Step 3: SMS Action */}
                  <div className="flex items-center space-x-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/50 dark:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">Personalized SMS Sent</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Custom offer delivered instantly</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-sm">ACTION</div>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 dark:from-emerald-900/20 dark:via-blue-900/20 dark:to-purple-900/20 p-4 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 shadow-lg backdrop-blur-sm">
                    <div className="flex items-center justify-center space-x-6 text-center">
                      <div>
                        <div className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">85%</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">Open Rate</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">42%</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">Conversion</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">3.2x</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">ROI</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Automation Badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg border-2 border-white dark:border-gray-800">
                  LIVE
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-60 animate-ping"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60 animate-ping delay-1000"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-red-400 to-pink-400 rounded-full opacity-20 animate-pulse blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-15 animate-pulse delay-1000 blur-xl"></div>
            <div className="absolute top-1/2 -left-3 w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full opacity-10 animate-pulse delay-500 blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;