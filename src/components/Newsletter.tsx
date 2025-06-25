import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Users, TrendingUp, Star } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const stats = [
    { icon: Users, number: '25K+', label: 'Subscribers' },
    { icon: TrendingUp, number: '98%', label: 'Success Rate' },
    { icon: Star, number: '4.9', label: 'Rating' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
              📧 Join Our Newsletter
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get Marketing Insights
              <span className="block">Delivered to Your Inbox</span>
            </h2>
            <p className="text-xl text-red-100 leading-relaxed max-w-2xl mx-auto">
              Stay ahead of the competition with weekly marketing tips, case studies, and exclusive strategies from our expert team.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-red-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          {isSubscribed ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">You're In!</h3>
              <p className="text-red-100 mb-6">
                Welcome to our community! Check your inbox for a confirmation email and get ready for actionable marketing insights.
              </p>
              <button
                onClick={() => setIsSubscribed(false)}
                className="text-white hover:text-red-100 font-medium"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-sm border-0 rounded-xl focus:ring-2 focus:ring-white focus:outline-none text-gray-900 placeholder-gray-500 font-medium"
                    placeholder="Enter your email address"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-white text-red-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 font-bold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-600"></div>
                  ) : (
                    <>
                      Subscribe Free
                      <ArrowRight className="ml-2" size={18} />
                    </>
                  )}
                </button>
              </form>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Weekly Insights</h4>
                    <p className="text-red-100 text-xs">Latest marketing trends and strategies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Exclusive Content</h4>
                    <p className="text-red-100 text-xs">Subscriber-only case studies & templates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">No Spam</h4>
                    <p className="text-red-100 text-xs">Unsubscribe anytime with one click</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-red-100 text-sm mb-4">
              Trusted by marketing professionals at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <span className="font-semibold">Google</span>
              <span className="font-semibold">Microsoft</span>
              <span className="font-semibold">Apple</span>
              <span className="font-semibold">Amazon</span>
              <span className="font-semibold">Tesla</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Newsletter;