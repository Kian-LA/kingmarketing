import React from 'react';
import { Users, Target, Award, TrendingUp, Heart, Zap, CheckCircle, ArrowRight, Trophy, Star, Medal } from 'lucide-react';
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

  const awards = [
    {
      icon: Trophy,
      title: 'Best Digital Marketing Agency 2024',
      organization: 'Marketing Excellence Awards',
      year: '2024',
      description: 'Recognized for outstanding performance and client satisfaction across all digital marketing channels.',
      color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600'
    },
    {
      icon: Star,
      title: 'Top ROI Performance Agency',
      organization: 'Digital Marketing Institute',
      year: '2024',
      description: 'Awarded for consistently delivering the highest return on investment for client campaigns.',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
    },
    {
      icon: Medal,
      title: 'Innovation in Marketing Technology',
      organization: 'AdTech Innovation Awards',
      year: '2023',
      description: 'Honored for developing cutting-edge marketing automation and analytics solutions.',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600'
    },
    {
      icon: Award,
      title: 'Client Satisfaction Excellence',
      organization: 'Business Review Awards',
      year: '2023',
      description: 'Achieved 98% client satisfaction rating, the highest in the digital marketing industry.',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600'
    },
    {
      icon: Trophy,
      title: 'Fastest Growing Marketing Agency',
      organization: 'Inc. 5000',
      year: '2023',
      description: 'Listed among the fastest-growing private companies in America for exceptional growth.',
      color: 'bg-red-100 dark:bg-red-900/30 text-red-600'
    },
    {
      icon: Star,
      title: 'Best PPC Campaign Management',
      organization: 'Search Engine Marketing Awards',
      year: '2022',
      description: 'Recognized for managing the most successful PPC campaigns with industry-leading ROAS.',
      color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600'
    },
    {
      icon: Medal,
      title: 'Excellence in Social Media Marketing',
      organization: 'Social Media Marketing Society',
      year: '2022',
      description: 'Awarded for creating viral social media campaigns that drove exceptional engagement.',
      color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600'
    },
    {
      icon: Award,
      title: 'Outstanding SEO Performance',
      organization: 'Search Marketing Awards',
      year: '2022',
      description: 'Achieved #1 rankings for 95% of target keywords across all client campaigns.',
      color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600'
    }
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

      {/* Awards Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading industry organizations and publications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* The 2025 Brandie Awards */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src="/src/assets/awards/Brandies-Post-2025-Launch-1024x452.png.webp" 
                    alt="The 2025 Brandie Awards"
                    className="w-full h-32 object-contain mx-auto"
                  />
                </div>
                <div className="text-sm font-semibold text-red-600 mb-2">2025</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">The Brandie Awards</h3>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">IntelligenceBank</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Recognized for excellence in brand design, campaigns, rebrands, and brand management. The Brandies celebrate the brand work performed by marketing heroes worldwide – the innovators, ideators, and implementers who bring their brand to life.
                </p>
              </div>
            </div>

            {/* The Effie Awards */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src="/src/assets/awards/Effie-Awards.png.webp" 
                    alt="The Effie Awards"
                    className="w-full h-32 object-contain mx-auto"
                  />
                </div>
                <div className="text-sm font-semibold text-red-600 mb-2">2024</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">The Effie Awards</h3>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Effie Worldwide</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Honored for effective marketing campaigns that achieve exceptional results. The Effie Awards inspire and champion the practice of marketing effectiveness globally, believing that if it's not effective marketing, it isn't marketing at all.
                </p>
              </div>
            </div>

            {/* MarCom Awards */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src="/src/assets/awards/marcom-awards.png.webp" 
                    alt="MarCom Awards"
                    className="w-full h-32 object-contain mx-auto"
                  />
                </div>
                <div className="text-sm font-semibold text-red-600 mb-2">2024</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">MarCom Awards</h3>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Association of Marketing and Communications Professionals</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Recognized for excellence in marketing and communication while celebrating the creativity, hard work, and generosity of industry professionals. Administered by AMCP to honor outstanding marketing achievements.
                </p>
              </div>
            </div>

            {/* Digiday Awards */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src="/src/assets/awards/Digiday-Awards.png.webp" 
                    alt="Digiday Awards"
                    className="w-full h-32 object-contain mx-auto"
                  />
                </div>
                <div className="text-sm font-semibold text-red-600 mb-2">2023</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">Digiday Awards</h3>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Digiday Media</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Awarded for outstanding digital marketing and media work. The Digiday Awards recognize the most successful brands and agencies around the globe for their award-winning digital marketing campaigns and innovative media strategies.
                </p>
              </div>
            </div>

            {/* The w3 Awards */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src="/src/assets/awards/W3-Awards.png.webp" 
                    alt="The w3 Awards"
                    className="w-full h-32 object-contain mx-auto"
                  />
                </div>
                <div className="text-sm font-semibold text-red-600 mb-2">2023</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">The w3 Awards</h3>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Academy of Interactive and Visual Arts</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Celebrated for digital excellence across websites, marketing, video, mobile sites & apps, social, podcasts, and emerging tech. The w3 Awards honor the unsung heroes of digital creativity who create imaginative and boundary-blazing work.
                </p>
              </div>
            </div>
          </div>

          {/* Awards Summary */}
          <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Industry Recognition
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                These awards reflect our team's dedication to delivering exceptional results and pushing the boundaries of what's possible in digital marketing.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Industry Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Years Running</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">#1</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Digital Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Award Winning</div>
                </div>
              </div>
            </div>
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