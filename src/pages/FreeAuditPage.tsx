import React, { useState } from 'react';
import { useEffect } from 'react';
import { CheckCircle, Search, Target, BarChart3, TrendingUp, Users, DollarSign, Clock, Star, ArrowRight, Download, Eye, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { submitAuditForm } from '../lib/forms';

const FreeAuditPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    industry: '',
    monthlyRevenue: '',
    marketingBudget: '',
    primaryGoal: '',
    currentChallenges: '',
    currentMarketing: [],
    timeframe: '',
    hearAboutUs: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Track page view for audit form
    if (typeof window !== 'undefined' && window._mfq) {
      window._mfq.push(['track', 'audit_page_view']);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await submitAuditForm({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.company,
        website: formData.website,
        phone: formData.phone,
        industry: formData.industry,
        monthlyRevenue: formData.monthlyRevenue,
        marketingBudget: formData.marketingBudget,
        primaryGoal: formData.primaryGoal,
        currentChallenges: formData.currentChallenges,
        currentMarketing: formData.currentMarketing,
        timeframe: formData.timeframe,
        hearAboutUs: formData.hearAboutUs,
      });

      if (error) {
        console.error('Error submitting audit form:', error);
        // Handle error
      } else {
        // Track successful audit form submission
        if (typeof window !== 'undefined' && window._mfq) {
          window._mfq.push(['track', 'audit_form_submitted']);
        }
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting audit form:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked 
          ? [...(prev[name as keyof typeof prev] as string[]), value]
          : (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const auditComponents = [
    {
      icon: Search,
      title: 'SEO & Website Analysis',
      description: 'Complete technical SEO audit, keyword analysis, and website performance review',
      items: [
        'Technical SEO health check',
        'Keyword ranking analysis',
        'Page speed optimization review',
        'Mobile responsiveness audit',
        'Content gap analysis',
        'Competitor SEO comparison'
      ]
    },
    {
      icon: Target,
      title: 'Paid Advertising Review',
      description: 'Analysis of current ad campaigns and identification of optimization opportunities',
      items: [
        'Google Ads account audit',
        'Facebook/Instagram ads review',
        'Campaign structure analysis',
        'Keyword and audience targeting',
        'Ad creative performance',
        'Budget allocation optimization'
      ]
    },
    {
      icon: BarChart3,
      title: 'Conversion Optimization',
      description: 'Detailed analysis of your sales funnel and conversion opportunities',
      items: [
        'Landing page conversion audit',
        'User experience (UX) review',
        'Sales funnel analysis',
        'Form optimization review',
        'Call-to-action effectiveness',
        'A/B testing recommendations'
      ]
    },
    {
      icon: Users,
      title: 'Social Media Assessment',
      description: 'Comprehensive review of your social media presence and engagement',
      items: [
        'Profile optimization review',
        'Content strategy analysis',
        'Engagement rate assessment',
        'Audience growth opportunities',
        'Competitor social analysis',
        'Platform-specific recommendations'
      ]
    }
  ];

  const auditBenefits = [
    {
      icon: TrendingUp,
      title: 'Identify Growth Opportunities',
      description: 'Discover untapped potential in your current marketing efforts'
    },
    {
      icon: DollarSign,
      title: 'Reduce Wasted Spend',
      description: 'Find areas where you\'re losing money and optimize your budget'
    },
    {
      icon: Target,
      title: 'Improve Targeting',
      description: 'Better understand your audience and how to reach them effectively'
    },
    {
      icon: Zap,
      title: 'Quick Wins',
      description: 'Get immediate actionable recommendations you can implement today'
    }
  ];

  const industries = [
    'E-commerce', 'SaaS/Technology', 'Healthcare', 'Real Estate', 'Finance',
    'Education', 'Fitness/Wellness', 'Professional Services', 'Manufacturing',
    'Retail', 'Hospitality', 'Non-profit', 'Other'
  ];

  const marketingChannels = [
    'Google Ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'SEO',
    'Email Marketing', 'Content Marketing', 'Social Media', 'Influencer Marketing',
    'Traditional Advertising', 'None Currently'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEOHead 
        title="Free Marketing Audit | $5,500 Value | 48-Hour Delivery | Logical Marketing"
        description="Get a comprehensive free marketing audit worth $5,500. Discover hidden opportunities and get a custom roadmap to 10x your growth. No obligations."
        keywords="free marketing audit, marketing analysis, website audit, SEO audit, PPC audit, conversion audit"
        url="https://logicalmarketing.com/free-audit"
      />
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Free Marketing Audit",
          description: "Comprehensive marketing audit revealing hidden opportunities worth thousands in additional revenue",
          offers: {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        }} 
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-full text-sm font-semibold mb-6">
              🎯 100% Free Marketing Audit
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get Your Free
              <span className="text-red-600"> Marketing Audit</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Discover exactly what's holding your business back and get a custom roadmap to 10x your growth. 
              Our comprehensive audit reveals hidden opportunities worth thousands in additional revenue.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Clock className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">48-Hour Delivery</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Get your detailed audit report within 2 business days</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Star className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">$5,500 Value</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive analysis normally worth $5,500 - completely free</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Eye className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">No Obligations</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Get valuable insights with zero commitment or pressure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Tell Us About Your Business
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                No credit card required • 48-hour delivery • $5,500 value
              </p>
              
              {/* Progress Bar */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        currentStep >= step ? 'bg-red-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                      }`}>
                        {step}
                      </div>
                      {step < 3 && (
                        <div className={`w-12 h-1 mx-2 ${
                          currentStep > step ? 'bg-red-600' : 'bg-gray-200 dark:bg-gray-700'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-16 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Thank You!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We've received your information and will begin your comprehensive marketing audit immediately.
                </p>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md mx-auto">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">What happens next?</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <span className="text-gray-600 dark:text-gray-300">We'll analyze your website and marketing within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <span className="text-gray-600 dark:text-gray-300">You'll receive a detailed audit report via email</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <span className="text-gray-600 dark:text-gray-300">We'll schedule a call to discuss your opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl">
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Basic Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                          placeholder="Your Company Inc."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Website URL *
                        </label>
                        <input
                          type="url"
                          name="website"
                          required
                          value={formData.website}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                          placeholder="https://yourwebsite.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Industry *
                      </label>
                      <select
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      >
                        <option value="">Select your industry</option>
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Business Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Business Details</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Monthly Revenue *
                        </label>
                        <select
                          name="monthlyRevenue"
                          required
                          value={formData.monthlyRevenue}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        >
                          <option value="">Select revenue range</option>
                          <option value="0-10k">$0 - $10k</option>
                          <option value="10k-50k">$10k - $50k</option>
                          <option value="50k-100k">$50k - $100k</option>
                          <option value="100k-500k">$100k - $500k</option>
                          <option value="500k-1m">$500k - $1M</option>
                          <option value="1m+">$1M+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Monthly Marketing Budget
                        </label>
                        <select
                          name="marketingBudget"
                          value={formData.marketingBudget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option value="0-1k">$0 - $1k</option>
                          <option value="1k-5k">$1k - $5k</option>
                          <option value="5k-10k">$5k - $10k</option>
                          <option value="10k-25k">$10k - $25k</option>
                          <option value="25k-50k">$25k - $50k</option>
                          <option value="50k+">$50k+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Primary Business Goal *
                      </label>
                      <select
                        name="primaryGoal"
                        required
                        value={formData.primaryGoal}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      >
                        <option value="">Select your primary goal</option>
                        <option value="increase-leads">Increase Leads</option>
                        <option value="boost-sales">Boost Sales</option>
                        <option value="improve-roi">Improve Marketing ROI</option>
                        <option value="brand-awareness">Build Brand Awareness</option>
                        <option value="reduce-cac">Reduce Customer Acquisition Cost</option>
                        <option value="scale-business">Scale Business Growth</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Current Marketing Channels (Select all that apply)
                      </label>
                      <div className="grid md:grid-cols-3 gap-3 mt-2">
                        {marketingChannels.map((channel) => (
                          <label key={channel} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              name="currentMarketing"
                              value={channel}
                              onChange={handleChange}
                              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{channel}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Biggest Marketing Challenges
                      </label>
                      <textarea
                        name="currentChallenges"
                        rows={4}
                        value={formData.currentChallenges}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="Tell us about your biggest marketing challenges, what's not working, or what you'd like to improve..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Final Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Final Details</h3>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        When are you looking to get started? *
                      </label>
                      <select
                        name="timeframe"
                        required
                        value={formData.timeframe}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      >
                        <option value="">Select timeframe</option>
                        <option value="immediately">Immediately</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="just-researching">Just researching</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        How did you hear about us?
                      </label>
                      <select
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      >
                        <option value="">Select source</option>
                        <option value="google-search">Google Search</option>
                        <option value="social-media">Social Media</option>
                        <option value="referral">Referral</option>
                        <option value="online-ad">Online Advertisement</option>
                        <option value="blog-article">Blog Article</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3">🎁 What You'll Receive:</h4>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Comprehensive 15-page marketing audit report</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Custom growth strategy roadmap</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Competitor analysis and benchmarking</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>ROI projections and timeline</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>30-minute strategy call with our experts</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors font-semibold"
                    >
                      Previous
                    </button>
                  )}
                  
                  <div className="ml-auto">
                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center"
                      >
                        Next Step
                        <ArrowRight className="ml-2" size={16} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-bold text-lg flex items-center"
                      >
                        Get My Free Audit
                        <ArrowRight className="ml-2" size={20} />
                      </button>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-6">
                  We respect your privacy. Your information will never be shared or sold.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What's Included in Your
              <span className="text-red-600"> Free Marketing Audit</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our comprehensive audit covers every aspect of your digital marketing to identify opportunities and create a roadmap for growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {auditComponents.map((component, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                    <component.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{component.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{component.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {component.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Get a Marketing Audit?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Most businesses are leaving money on the table without realizing it. Our audit reveals exactly where and how much.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-orange-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Growth Potential?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have discovered hidden opportunities worth thousands in additional revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-white">
              <Star className="w-5 h-5 text-yellow-400 mr-1" />
              <Star className="w-5 h-5 text-yellow-400 mr-1" />
              <Star className="w-5 h-5 text-yellow-400 mr-1" />
              <Star className="w-5 h-5 text-yellow-400 mr-1" />
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm">4.9/5 from 200+ audits</span>
            </div>
          </div>
          <button
            onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-8 px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg flex items-center mx-auto"
          >
            Get Your Free Audit Now
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeAuditPage;