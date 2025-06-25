import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight, TrendingUp, Users, DollarSign, Calendar, MapPin, Target, BarChart3, CheckCircle, Play, Pause, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CaseStudiesPage = () => {
  const [selectedCase, setSelectedCase] = useState(0);
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
  const [animatedStats, setAnimatedStats] = useState<{[key: string]: number}>({});
  const [searchParams, setSearchParams] = useSearchParams();

  const caseStudies = [
    {
      id: 'techstart-pro',
      company: 'TechStart Pro',
      industry: 'SaaS',
      location: 'San Francisco, CA',
      duration: '8 months',
      challenge: 'Low conversion rates and high customer acquisition costs were preventing TechStart Pro from scaling their B2B SaaS platform effectively.',
      solution: 'Complete funnel optimization, targeted PPC campaigns, and conversion rate optimization across all touchpoints.',
      overview: 'TechStart Pro came to us struggling with a 0.8% conversion rate and a customer acquisition cost that was 3x higher than industry standards. Their SaaS platform had great product-market fit, but their marketing funnel was leaking potential customers at every stage.',
      strategy: [
        'Comprehensive funnel audit and user journey mapping',
        'Landing page redesign with A/B testing framework',
        'Google Ads and LinkedIn campaign optimization',
        'Email nurture sequence implementation',
        'Sales enablement and lead scoring system'
      ],
      results: [
        { icon: TrendingUp, metric: 340, suffix: '%', label: 'Conversion Rate Increase', color: 'text-green-500' },
        { icon: DollarSign, metric: 2.4, suffix: 'M', label: 'Additional Revenue', color: 'text-blue-500' },
        { icon: Users, metric: 85, suffix: '%', label: 'Lower CAC', color: 'text-purple-500' },
        { icon: Target, metric: 450, suffix: '%', label: 'Lead Quality Improvement', color: 'text-orange-500' }
      ],
      timeline: [
        { month: 'Month 1-2', task: 'Audit & Strategy Development', status: 'completed' },
        { month: 'Month 3-4', task: 'Landing Page Optimization', status: 'completed' },
        { month: 'Month 5-6', task: 'Campaign Launch & Testing', status: 'completed' },
        { month: 'Month 7-8', task: 'Scale & Optimization', status: 'completed' }
      ],
      testimonial: {
        text: "Logical Marketing completely transformed our business. We went from struggling to get leads to having more qualified prospects than we can handle. Their team is incredible!",
        author: "Sarah Johnson",
        position: "CEO, TechStart Pro"
      },
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      beforeAfter: {
        before: { conversionRate: '0.8%', cac: '$450', monthlyLeads: '120' },
        after: { conversionRate: '3.5%', cac: '$68', monthlyLeads: '540' }
      }
    },
    {
      id: 'ecoshop',
      company: 'EcoShop',
      industry: 'E-commerce',
      location: 'Portland, OR',
      duration: '6 months',
      challenge: 'Struggling to scale beyond $100K monthly revenue despite having great products and customer satisfaction.',
      solution: 'Multi-channel advertising strategy with creative optimization and advanced audience targeting.',
      overview: 'EcoShop had built a loyal customer base for their sustainable products but hit a plateau at $100K monthly revenue. They needed to scale their advertising while maintaining profitability.',
      strategy: [
        'Facebook and Instagram advertising scale-up',
        'Google Shopping and Search campaigns',
        'Influencer partnership program',
        'Email marketing automation',
        'Customer lifetime value optimization'
      ],
      results: [
        { icon: DollarSign, metric: 1.2, suffix: 'M', label: 'Monthly Revenue', color: 'text-green-500' },
        { icon: TrendingUp, metric: 450, suffix: '%', label: 'ROAS Improvement', color: 'text-blue-500' },
        { icon: Users, metric: 12, suffix: 'x', label: 'Customer Growth', color: 'text-purple-500' },
        { icon: BarChart3, metric: 280, suffix: '%', label: 'Profit Increase', color: 'text-orange-500' }
      ],
      timeline: [
        { month: 'Month 1', task: 'Market Research & Setup', status: 'completed' },
        { month: 'Month 2-3', task: 'Campaign Launch & Testing', status: 'completed' },
        { month: 'Month 4-5', task: 'Scale & Optimization', status: 'completed' },
        { month: 'Month 6', task: 'Advanced Automation', status: 'completed' }
      ],
      testimonial: {
        text: "The ROI we've seen from working with Logical Marketing is unbelievable. They helped us scale from $100K to over $1M monthly revenue in just 6 months.",
        author: "Michael Chen",
        position: "Founder, EcoShop"
      },
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      beforeAfter: {
        before: { revenue: '$100K', roas: '2.1x', customers: '450' },
        after: { revenue: '$1.2M', roas: '4.8x', customers: '5,400' }
      }
    },
    {
      id: 'medcare-plus',
      company: 'MedCare Plus',
      industry: 'Healthcare',
      location: 'Miami, FL',
      duration: '10 months',
      challenge: 'Need to increase patient bookings and brand awareness in a competitive healthcare market.',
      solution: 'Local SEO optimization, targeted social media campaigns, and reputation management.',
      overview: 'MedCare Plus, a multi-specialty medical practice, was struggling to attract new patients in a saturated market. They needed to improve their online presence and build trust with potential patients.',
      strategy: [
        'Local SEO and Google My Business optimization',
        'Healthcare-compliant social media marketing',
        'Patient review and reputation management',
        'Educational content marketing',
        'Targeted local advertising campaigns'
      ],
      results: [
        { icon: Users, metric: 280, suffix: '%', label: 'Patient Bookings', color: 'text-green-500' },
        { icon: TrendingUp, metric: 95, suffix: '%', label: 'Local Visibility', color: 'text-blue-500' },
        { icon: DollarSign, metric: 800, suffix: 'K', label: 'Revenue Growth', color: 'text-purple-500' },
        { icon: Target, metric: 350, suffix: '%', label: 'Online Reviews', color: 'text-orange-500' }
      ],
      timeline: [
        { month: 'Month 1-2', task: 'SEO Audit & Setup', status: 'completed' },
        { month: 'Month 3-5', task: 'Content & Social Strategy', status: 'completed' },
        { month: 'Month 6-8', task: 'Reputation Management', status: 'completed' },
        { month: 'Month 9-10', task: 'Scale & Optimization', status: 'completed' }
      ],
      testimonial: {
        text: "Professional, results-driven, and always available when we need them. Our patient bookings have increased by 280% since we started working together.",
        author: "Dr. Amanda Rodriguez",
        position: "Director, MedCare Plus"
      },
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      beforeAfter: {
        before: { bookings: '45/month', visibility: '12%', reviews: '3.2 stars' },
        after: { bookings: '171/month', visibility: '95%', reviews: '4.8 stars' }
      }
    },
    {
      id: 'fitnesspro',
      company: 'FitnessPro',
      industry: 'Fitness',
      location: 'Austin, TX',
      duration: '7 months',
      challenge: 'Gym membership cancellations were high and new member acquisition was expensive and ineffective.',
      solution: 'Community-focused social media strategy, referral program optimization, and retention campaigns.',
      overview: 'FitnessPro was facing the common fitness industry challenge of high churn rates and expensive customer acquisition. They needed a strategy that focused on both acquisition and retention.',
      strategy: [
        'Social media community building',
        'Referral and loyalty program development',
        'Retention-focused email campaigns',
        'Local partnership and event marketing',
        'Member success story campaigns'
      ],
      results: [
        { icon: Users, metric: 320, suffix: '%', label: 'Member Retention', color: 'text-green-500' },
        { icon: DollarSign, metric: 5, suffix: 'x', label: 'Return on Ad Spend', color: 'text-blue-500' },
        { icon: TrendingUp, metric: 180, suffix: '%', label: 'New Memberships', color: 'text-purple-500' },
        { icon: Target, metric: 65, suffix: '%', label: 'Referral Rate', color: 'text-orange-500' }
      ],
      timeline: [
        { month: 'Month 1', task: 'Community Analysis', status: 'completed' },
        { month: 'Month 2-3', task: 'Social Strategy Launch', status: 'completed' },
        { month: 'Month 4-5', task: 'Referral Program', status: 'completed' },
        { month: 'Month 6-7', task: 'Retention Optimization', status: 'completed' }
      ],
      testimonial: {
        text: "Logical Marketing doesn't just run ads - they understand our business and create strategies that actually work. Best marketing investment we've ever made.",
        author: "David Kim",
        position: "Owner, FitnessPro"
      },
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      beforeAfter: {
        before: { retention: '45%', roas: '1.2x', referrals: '8%' },
        after: { retention: '89%', roas: '5.1x', referrals: '65%' }
      }
    },
    {
      id: 'luxe-real-estate',
      company: 'Luxe Real Estate',
      industry: 'Real Estate',
      location: 'Beverly Hills, CA',
      duration: '12 months',
      challenge: 'Difficulty reaching high-net-worth individuals and showcasing luxury properties effectively online.',
      solution: 'Premium content strategy, targeted advertising to affluent audiences, and virtual tour optimization.',
      overview: 'Luxe Real Estate specializes in multi-million dollar properties but struggled to reach qualified buyers online. They needed a sophisticated digital strategy that matched their premium brand.',
      strategy: [
        'Luxury-focused content and photography',
        'High-net-worth audience targeting',
        'Virtual tour and video marketing',
        'Exclusive event marketing',
        'Influencer and celebrity partnerships'
      ],
      results: [
        { icon: DollarSign, metric: 15, suffix: 'M', label: 'Sales Generated', color: 'text-green-500' },
        { icon: TrendingUp, metric: 420, suffix: '%', label: 'Qualified Leads', color: 'text-blue-500' },
        { icon: Users, metric: 250, suffix: '%', label: 'Website Traffic', color: 'text-purple-500' },
        { icon: Target, metric: 89, suffix: '%', label: 'Lead Quality Score', color: 'text-orange-500' }
      ],
      timeline: [
        { month: 'Month 1-2', task: 'Brand & Content Strategy', status: 'completed' },
        { month: 'Month 3-5', task: 'Premium Content Creation', status: 'completed' },
        { month: 'Month 6-9', task: 'Targeted Campaigns', status: 'completed' },
        { month: 'Month 10-12', task: 'Partnership & Events', status: 'completed' }
      ],
      testimonial: {
        text: "Their understanding of the luxury market is exceptional. We've closed $15M in sales directly attributed to their marketing strategies.",
        author: "Victoria Sterling",
        position: "CEO, Luxe Real Estate"
      },
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      beforeAfter: {
        before: { leads: '12/month', quality: '35%', sales: '$2M/year' },
        after: { leads: '62/month', quality: '89%', sales: '$15M/year' }
      }
    }
  ];

  // Handle URL parameters to show specific case study
  useEffect(() => {
    const studyParam = searchParams.get('study');
    if (studyParam) {
      const caseIndex = caseStudies.findIndex(study => study.id === studyParam);
      if (caseIndex !== -1) {
        setSelectedCase(caseIndex);
      }
    }
  }, [searchParams]);

  // Animate stats when component mounts or case study changes
  useEffect(() => {
    const currentCase = caseStudies[selectedCase];
    const newAnimatedStats: {[key: string]: number} = {};
    
    currentCase.results.forEach((result, index) => {
      const targetValue = result.metric;
      let currentValue = 0;
      const increment = targetValue / 50; // 50 steps for smooth animation
      
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(timer);
        }
        newAnimatedStats[`${selectedCase}-${index}`] = currentValue;
        setAnimatedStats({...newAnimatedStats});
      }, 30);
    });
  }, [selectedCase]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const currentCase = caseStudies[selectedCase];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEOHead 
        title="Marketing Case Studies | Real Results & Success Stories | Logical Marketing"
        description="Discover how we've helped businesses achieve extraordinary growth. Real case studies with proven results including 340% conversion increases and $50M+ revenue generated."
        keywords="marketing case studies, success stories, client results, ROI examples, conversion optimization results"
        url="https://logicalmarketing.com/case-studies"
      />
      <SchemaMarkup 
        type="article" 
        data={{
          headline: "Marketing Case Studies - Real Results for Real Businesses",
          description: "Comprehensive case studies showing how we've helped businesses achieve extraordinary growth",
          author: "Logical Marketing Team",
          datePublished: "2024-01-15",
          url: "https://logicalmarketing.com/case-studies"
        }} 
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-6">
              Success Stories
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Real Results for
              <span className="text-red-600"> Real Businesses</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Discover how we've helped businesses like yours achieve extraordinary growth with proven marketing strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Navigation */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => {
                  setSelectedCase(index);
                  setSearchParams({ study: study.id });
                }}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  selectedCase === index
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {study.company}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Case Study Content */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          {/* Case Study Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-red-600 font-semibold">
                  <span>{currentCase.industry}</span>
                  <ArrowUpRight size={16} />
                </div>
                <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                  <MapPin size={14} />
                  <span className="text-sm">{currentCase.location}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                  <Calendar size={14} />
                  <span className="text-sm">{currentCase.duration}</span>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{currentCase.company}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{currentCase.overview}</p>
            </div>
            
            <div className="relative">
              <img 
                src={currentCase.image} 
                alt={currentCase.company}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>

          {/* Animated Results */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {currentCase.results.map((result, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                <result.icon className={`w-8 h-8 ${result.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {animatedStats[`${selectedCase}-${index}`] ? 
                    (result.suffix === 'M' || result.suffix === 'K' ? 
                      animatedStats[`${selectedCase}-${index}`].toFixed(1) : 
                      Math.round(animatedStats[`${selectedCase}-${index}`])
                    ) : '0'
                  }{result.suffix}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{result.label}</div>
              </div>
            ))}
          </div>

          {/* Before/After Comparison */}
          <div className="bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-900/20 dark:to-blue-900/20 p-8 rounded-xl mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Before vs After</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-red-600 mb-4">Before</h4>
                <div className="space-y-3">
                  {Object.entries(currentCase.beforeAfter.before).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded-lg">
                      <span className="capitalize text-gray-600 dark:text-gray-300">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-bold text-gray-900 dark:text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-green-600 mb-4">After</h4>
                <div className="space-y-3">
                  {Object.entries(currentCase.beforeAfter.after).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded-lg">
                      <span className="capitalize text-gray-600 dark:text-gray-300">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-bold text-green-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Sections */}
          <div className="space-y-6 mb-16">
            {/* Challenge */}
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleSection('challenge')}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">The Challenge</h3>
                {expandedSections.challenge ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSections.challenge && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{currentCase.challenge}</p>
                </div>
              )}
            </div>

            {/* Solution */}
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleSection('solution')}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Solution</h3>
                {expandedSections.solution ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSections.solution && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{currentCase.solution}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentCase.strategy.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Timeline */}
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleSection('timeline')}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Project Timeline</h3>
                {expandedSections.timeline ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSections.timeline && (
                <div className="px-6 pb-6">
                  <div className="space-y-4">
                    {currentCase.timeline.map((phase, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white">{phase.month}</div>
                          <div className="text-gray-600 dark:text-gray-300">{phase.task}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-red-600 text-white p-8 rounded-xl text-center">
            <div className="text-2xl font-bold mb-4">"{currentCase.testimonial.text}"</div>
            <div className="text-red-100">
              <div className="font-semibold">{currentCase.testimonial.author}</div>
              <div>{currentCase.testimonial.position}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-bold text-lg">
                Schedule Your Free Consultation
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg hover:border-red-600 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200 font-bold text-lg">
                Download Case Study PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;