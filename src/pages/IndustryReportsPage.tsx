import React, { useState } from 'react';
import { BarChart3, Download, Calendar, TrendingUp, Users, DollarSign, Eye, Filter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndustryReportsPage = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const years = ['2024', '2023', '2022'];
  const industries = ['All', 'E-commerce', 'SaaS', 'Healthcare', 'Finance', 'Real Estate', 'Education'];

  const reports = [
    {
      id: 1,
      title: 'Digital Marketing Trends Report 2024',
      description: 'Comprehensive analysis of the latest digital marketing trends, consumer behavior shifts, and emerging technologies shaping the industry.',
      industry: 'All',
      year: '2024',
      pages: 85,
      downloadCount: '25.3K',
      publishDate: '2024-01-15',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      keyFindings: [
        'AI adoption increased by 340% in marketing',
        'Video content drives 80% more engagement',
        'Privacy-first marketing becomes essential',
        'Mobile commerce grows 45% year-over-year'
      ]
    },
    {
      id: 2,
      title: 'E-commerce Marketing Benchmark Report',
      description: 'In-depth analysis of e-commerce marketing performance across industries, including conversion rates, customer acquisition costs, and ROI metrics.',
      industry: 'E-commerce',
      year: '2024',
      pages: 65,
      downloadCount: '18.7K',
      publishDate: '2024-02-01',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      keyFindings: [
        'Average conversion rate: 2.86%',
        'Customer acquisition cost up 12%',
        'Email marketing ROI: 4200%',
        'Social commerce grows 35%'
      ]
    },
    {
      id: 3,
      title: 'SaaS Marketing Performance Study',
      description: 'Detailed examination of SaaS marketing strategies, customer lifetime value trends, and the most effective channels for B2B software companies.',
      industry: 'SaaS',
      year: '2024',
      pages: 72,
      downloadCount: '14.2K',
      publishDate: '2024-01-20',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      keyFindings: [
        'Average CAC payback: 14 months',
        'Content marketing drives 67% of leads',
        'Free trial conversion: 18%',
        'Customer LTV increased 23%'
      ]
    },
    {
      id: 4,
      title: 'Healthcare Digital Marketing Report',
      description: 'Analysis of digital marketing trends in healthcare, patient acquisition strategies, and compliance considerations for medical practices.',
      industry: 'Healthcare',
      year: '2023',
      pages: 58,
      downloadCount: '11.8K',
      publishDate: '2023-12-10',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      keyFindings: [
        'Telehealth adoption up 180%',
        'Local SEO critical for practices',
        'Patient reviews influence 89% of decisions',
        'Mobile bookings increased 65%'
      ]
    },
    {
      id: 5,
      title: 'Financial Services Marketing Insights',
      description: 'Comprehensive study of digital marketing in financial services, including regulatory compliance, trust-building strategies, and customer acquisition.',
      industry: 'Finance',
      year: '2023',
      pages: 68,
      downloadCount: '9.5K',
      publishDate: '2023-11-15',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      keyFindings: [
        'Trust signals increase conversions 45%',
        'Educational content drives 78% of leads',
        'Compliance costs average 15% of budget',
        'Personalization improves retention 32%'
      ]
    },
    {
      id: 6,
      title: 'Real Estate Marketing Trends 2023',
      description: 'Analysis of real estate marketing strategies, virtual tour adoption, and the impact of market conditions on marketing effectiveness.',
      industry: 'Real Estate',
      year: '2023',
      pages: 45,
      downloadCount: '7.9K',
      publishDate: '2023-10-05',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      keyFindings: [
        'Virtual tours increase inquiries 87%',
        'Social media drives 42% of leads',
        'Video content engagement up 156%',
        'Local SEO critical for agents'
      ]
    }
  ];

  const filteredReports = reports.filter(report => {
    const matchesYear = selectedYear === 'All' || report.year === selectedYear;
    const matchesIndustry = selectedIndustry === 'All' || report.industry === selectedIndustry;
    return matchesYear && matchesIndustry;
  });

  const stats = [
    { icon: BarChart3, number: '50+', label: 'Industry Reports' },
    { icon: Users, number: '100K+', label: 'Downloads' },
    { icon: TrendingUp, number: '95%', label: 'Accuracy Rate' },
    { icon: Eye, number: '500+', label: 'Data Sources' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold mb-6">
              📊 Industry Reports
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Industry Reports &
              <span className="text-purple-600"> Market Insights</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Stay ahead of the competition with our comprehensive industry reports featuring the latest trends, benchmarks, and actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-500" size={20} />
              <span className="font-semibold text-gray-900 dark:text-white">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Industry</label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredReports.map((report) => (
              <div key={report.id} className={`group cursor-pointer ${
                report.featured ? 'lg:col-span-2' : ''
              }`}>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className={`flex ${report.featured ? 'flex-col lg:flex-row' : 'flex-col'} h-full`}>
                    <div className={`relative ${report.featured ? 'lg:w-1/2' : ''}`}>
                      <img 
                        src={report.image} 
                        alt={report.title}
                        className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                          report.featured ? 'h-64 lg:h-full' : 'h-48'
                        }`}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {report.industry}
                        </span>
                      </div>
                      {report.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Latest
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className={`p-6 flex-1 ${report.featured ? 'lg:w-1/2' : ''}`}>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{new Date(report.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BarChart3 size={14} />
                          <span>{report.pages} pages</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download size={14} />
                          <span>{report.downloadCount}</span>
                        </div>
                      </div>
                      
                      <h3 className={`font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 transition-colors ${
                        report.featured ? 'text-2xl lg:text-3xl' : 'text-xl'
                      }`}>
                        {report.title}
                      </h3>
                      
                      <p className={`text-gray-600 dark:text-gray-300 mb-4 ${
                        report.featured ? 'text-lg' : ''
                      }`}>
                        {report.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Findings:</h4>
                        <ul className="space-y-1">
                          {report.keyFindings.map((finding, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                              <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{finding}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold flex items-center justify-center">
                        Download Report
                        <Download className="ml-2" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredReports.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <BarChart3 size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No reports found</h3>
              <p className="text-gray-600 dark:text-gray-300">Try adjusting your filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Want Custom Industry Research?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get personalized industry insights and competitive analysis tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold text-lg">
                Request Custom Research
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200 font-bold text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryReportsPage;