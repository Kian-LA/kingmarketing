import React from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, ArrowUpRight, Eye, Mouse, Calendar } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const DashboardPage = () => {
  const { user } = useAuth();

  const stats = [
    {
      icon: DollarSign,
      title: 'Total Revenue',
      value: '$45,231',
      change: '+12.5%',
      changeType: 'increase'
    },
    {
      icon: Users,
      title: 'New Leads',
      value: '1,234',
      change: '+8.2%',
      changeType: 'increase'
    },
    {
      icon: Eye,
      title: 'Website Traffic',
      value: '23,456',
      change: '+15.3%',
      changeType: 'increase'
    },
    {
      icon: Mouse,
      title: 'Conversion Rate',
      value: '3.24%',
      change: '+0.8%',
      changeType: 'increase'
    }
  ];

  const recentActivity = [
    {
      type: 'campaign',
      title: 'Google Ads Campaign Started',
      description: 'New PPC campaign "Summer Sale 2024" is now live',
      time: '2 hours ago',
      status: 'success'
    },
    {
      type: 'lead',
      title: 'New Lead Generated',
      description: 'John Smith submitted contact form',
      time: '4 hours ago',
      status: 'info'
    },
    {
      type: 'report',
      title: 'Weekly Report Generated',
      description: 'Marketing performance report for Week 23',
      time: '1 day ago',
      status: 'neutral'
    },
    {
      type: 'optimization',
      title: 'Landing Page Optimized',
      description: 'Homepage conversion rate improved by 2.1%',
      time: '2 days ago',
      status: 'success'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SEOHead 
        title="Dashboard | Logical Marketing"
        description="View your marketing performance and analytics dashboard."
      />
      <Header />
      
      <div className="pt-20">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Welcome back, {user?.user_metadata?.first_name || 'User'}!
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Here's what's happening with your marketing campaigns today.
                </p>
              </div>
              <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                <Calendar size={16} />
                <span className="text-sm">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                      {stat.value}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                    vs last month
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chart Placeholder */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Revenue Overview
                </h3>
                <button className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center">
                  View Details
                  <ArrowUpRight size={16} className="ml-1" />
                </button>
              </div>
              <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Revenue chart will be displayed here
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === 'success' ? 'bg-green-500' :
                      activity.status === 'info' ? 'bg-blue-500' :
                      'bg-gray-400'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {activity.description}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Actions
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <button className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                <TrendingUp className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Create Campaign
                </span>
              </button>
              <button className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                <BarChart3 className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  View Reports
                </span>
              </button>
              <button className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                <Users className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Manage Leads
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardPage;