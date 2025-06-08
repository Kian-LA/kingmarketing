import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign, Target, BarChart3, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ROICalculatorPage = () => {
  const [formData, setFormData] = useState({
    monthlyRevenue: '',
    conversionRate: '',
    averageOrderValue: '',
    monthlyTraffic: '',
    marketingBudget: '',
    industry: '',
    businessType: ''
  });

  const [results, setResults] = useState({
    currentROI: 0,
    projectedROI: 0,
    additionalRevenue: 0,
    additionalLeads: 0,
    paybackPeriod: 0,
    yearlyGrowth: 0
  });

  const [showResults, setShowResults] = useState(false);

  const industries = [
    'E-commerce', 'SaaS/Technology', 'Healthcare', 'Real Estate', 'Finance',
    'Education', 'Professional Services', 'Manufacturing', 'Retail', 'Other'
  ];

  const businessTypes = [
    'B2B', 'B2C', 'B2B2C', 'Marketplace', 'Subscription', 'E-commerce', 'Service-based'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateROI = () => {
    const revenue = parseFloat(formData.monthlyRevenue) || 0;
    const conversionRate = parseFloat(formData.conversionRate) || 0;
    const aov = parseFloat(formData.averageOrderValue) || 0;
    const traffic = parseFloat(formData.monthlyTraffic) || 0;
    const budget = parseFloat(formData.marketingBudget) || 0;

    if (revenue === 0 || budget === 0) return;

    // Current ROI calculation
    const currentROI = ((revenue - budget) / budget) * 100;

    // Industry benchmarks and improvement factors
    const industryMultipliers: { [key: string]: number } = {
      'E-commerce': 2.5,
      'SaaS/Technology': 3.2,
      'Healthcare': 2.8,
      'Real Estate': 3.5,
      'Finance': 2.9,
      'Education': 2.4,
      'Professional Services': 3.1,
      'Manufacturing': 2.6,
      'Retail': 2.3,
      'Other': 2.5
    };

    const multiplier = industryMultipliers[formData.industry] || 2.5;
    
    // Projected improvements
    const improvedConversionRate = conversionRate * 1.4; // 40% improvement
    const improvedTraffic = traffic * 1.6; // 60% improvement
    const improvedAOV = aov * 1.15; // 15% improvement

    // Calculate projected revenue
    const projectedMonthlyRevenue = (improvedTraffic * (improvedConversionRate / 100) * improvedAOV);
    const additionalRevenue = projectedMonthlyRevenue - revenue;
    const projectedROI = ((projectedMonthlyRevenue - budget) / budget) * 100;

    // Additional calculations
    const additionalLeads = (improvedTraffic * (improvedConversionRate / 100)) - (traffic * (conversionRate / 100));
    const paybackPeriod = budget / (additionalRevenue || 1);
    const yearlyGrowth = additionalRevenue * 12;

    setResults({
      currentROI: Math.round(currentROI),
      projectedROI: Math.round(projectedROI),
      additionalRevenue: Math.round(additionalRevenue),
      additionalLeads: Math.round(additionalLeads),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      yearlyGrowth: Math.round(yearlyGrowth)
    });

    setShowResults(true);
  };

  const resetCalculator = () => {
    setFormData({
      monthlyRevenue: '',
      conversionRate: '',
      averageOrderValue: '',
      monthlyTraffic: '',
      marketingBudget: '',
      industry: '',
      businessType: ''
    });
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold mb-6">
              🧮 ROI Calculator
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Marketing ROI
              <span className="text-indigo-600"> Calculator</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Discover your potential return on investment with our advanced marketing ROI calculator. See exactly how much revenue you could generate.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Calculator className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Accurate Projections</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Based on real industry data and proven results</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <TrendingUp className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Growth Insights</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">See your potential for revenue growth and expansion</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Target className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Actionable Data</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Get specific recommendations for your business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input Form */}
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Enter Your Business Details
                </h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Monthly Revenue ($)
                      </label>
                      <input
                        type="number"
                        name="monthlyRevenue"
                        value={formData.monthlyRevenue}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="50000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Conversion Rate (%)
                      </label>
                      <input
                        type="number"
                        name="conversionRate"
                        value={formData.conversionRate}
                        onChange={handleInputChange}
                        step="0.1"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="2.5"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Average Order Value ($)
                      </label>
                      <input
                        type="number"
                        name="averageOrderValue"
                        value={formData.averageOrderValue}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="150"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Monthly Website Traffic
                      </label>
                      <input
                        type="number"
                        name="monthlyTraffic"
                        value={formData.monthlyTraffic}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="10000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Monthly Marketing Budget ($)
                    </label>
                    <input
                      type="number"
                      name="marketingBudget"
                      value={formData.marketingBudget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="5000"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Industry
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      >
                        <option value="">Select Industry</option>
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Business Type
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      >
                        <option value="">Select Type</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={calculateROI}
                      className="flex-1 bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-bold text-lg flex items-center justify-center"
                    >
                      Calculate ROI
                      <Calculator className="ml-2" size={20} />
                    </button>
                    <button
                      onClick={resetCalculator}
                      className="px-6 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors font-semibold"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl">
                {showResults ? (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Your ROI Projection
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">{results.currentROI}%</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">Current ROI</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-600">{results.projectedROI}%</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">Projected ROI</div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4">Projected Improvements</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Additional Monthly Revenue:</span>
                            <span className="font-bold text-green-600">${results.additionalRevenue.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Additional Monthly Leads:</span>
                            <span className="font-bold text-blue-600">{results.additionalLeads.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Payback Period:</span>
                            <span className="font-bold text-purple-600">{results.paybackPeriod} months</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Yearly Growth Potential:</span>
                            <span className="font-bold text-orange-600">${results.yearlyGrowth.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-indigo-600 text-white p-6 rounded-lg">
                        <h3 className="font-bold mb-3">🎯 What This Means for You:</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>Potential to increase revenue by {Math.round((results.additionalRevenue / parseFloat(formData.monthlyRevenue || '1')) * 100)}% monthly</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>ROI improvement of {results.projectedROI - results.currentROI} percentage points</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>Break-even in {results.paybackPeriod} months with continued growth</span>
                          </li>
                        </ul>
                      </div>

                      <button className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-bold text-lg flex items-center justify-center">
                        Get Your Custom Strategy
                        <ArrowRight className="ml-2" size={20} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <BarChart3 className="w-12 h-12 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Ready to See Your Potential?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Fill out the form to calculate your marketing ROI and discover growth opportunities.
                    </p>
                    <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center justify-center space-x-2">
                        <Zap className="w-4 h-4" />
                        <span>Instant calculations based on industry data</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Target className="w-4 h-4" />
                        <span>Personalized growth projections</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>Actionable improvement recommendations</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Achieve These Results?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Our expert team can help you implement the strategies needed to reach your ROI goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold text-lg">
                Get Free Strategy Session
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors duration-200 font-bold text-lg">
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

export default ROICalculatorPage;