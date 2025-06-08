import React from 'react';
import { Users, Target, Award, TrendingUp, Heart, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure success by your success. Every strategy is designed to deliver measurable ROI and real business growth.'
    },
    {
      icon: Heart,
      title: 'Client-First',
      description: 'Your business goals become our mission. We work as an extension of your team, not just another vendor.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of marketing trends and technology to give you a competitive advantage in your market.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards and continuously optimize to deliver exceptional results.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Successful Campaigns' },
    { number: '$50M+', label: 'Revenue Generated' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started with a vision to help businesses grow through data-driven marketing strategies.'
    },
    {
      year: '2020',
      title: 'First 100 Clients',
      description: 'Reached our first major milestone by helping 100 businesses transform their marketing.'
    },
    {
      year: '2021',
      title: 'Award Recognition',
      description: 'Named "Best Digital Marketing Agency" by Industry Leaders Magazine.'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew our team to 25+ marketing experts across all digital channels.'
    },
    {
      year: '2023',
      title: '$50M Generated',
      description: 'Helped our clients generate over $50 million in additional revenue.'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as the #1 marketing agency for ROI and client satisfaction.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-6">
              About KingMarketing
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              We Help Businesses
              <span className="text-red-600"> Dominate Their Markets</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Founded on the belief that every business deserves to thrive, we combine cutting-edge marketing strategies with proven results to help our clients achieve extraordinary growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  KingMarketing was born from a simple observation: too many great businesses were struggling to reach their full potential because of ineffective marketing. We saw companies with amazing products and services that couldn't break through the noise of today's crowded digital landscape.
                </p>
                <p>
                  Our founders, with over 15 years of combined experience in digital marketing, decided to create an agency that would be different. Instead of offering cookie-cutter solutions, we would take the time to understand each client's unique challenges and create custom strategies that deliver real results.
                </p>
                <p>
                  Today, we're proud to have helped over 500 businesses transform their marketing and achieve growth they never thought possible. From startups to established enterprises, our data-driven approach has generated over $50 million in additional revenue for our clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our team working"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From a small startup to an industry leader, here's how we've grown alongside our clients.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              To empower businesses of all sizes to achieve extraordinary growth through innovative, data-driven marketing strategies that deliver measurable results and lasting success.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-red-200 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Growth Focused</h3>
                <p className="text-red-100 text-sm">Every strategy is designed to drive sustainable business growth</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-red-200 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Client Success</h3>
                <p className="text-red-100 text-sm">Your success is our success - we're invested in your results</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-red-200 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Proven Results</h3>
                <p className="text-red-100 text-sm">Data-driven strategies with a track record of success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how we can help your business achieve the growth you've been looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-bold text-lg flex items-center justify-center">
                Get Your Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg hover:border-red-600 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200 font-bold text-lg">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;