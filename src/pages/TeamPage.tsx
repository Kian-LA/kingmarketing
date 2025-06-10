import React from 'react';
import { Linkedin as LinkedIn, Twitter, Mail, Award, Users, TrendingUp } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TeamPage = () => {
  const leadership = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      bio: 'With over 10 years in digital marketing, Sarah has led campaigns for Fortune 500 companies and helped scale startups to multi-million dollar businesses.',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Strategic Planning', 'Business Growth', 'Team Leadership'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@logicalmarketing.com'
      }
    },
    {
      name: 'Michael Chen',
      position: 'Head of Paid Advertising',
      bio: 'Michael is a certified Google and Facebook ads expert who has managed over $10M in ad spend, consistently delivering 4x+ ROAS for clients.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Google Ads', 'Facebook Ads', 'PPC Strategy'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@logicalmarketing.com'
      }
    },
    {
      name: 'Dr. Amanda Rodriguez',
      position: 'Director of Analytics',
      bio: 'Amanda brings a PhD in Data Science and 8 years of experience turning complex data into actionable marketing insights that drive results.',
      image: 'https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Data Analysis', 'Conversion Optimization', 'Marketing Attribution'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'amanda@logicalmarketing.com'
      }
    }
  ];

  const team = [
    {
      name: 'David Kim',
      position: 'Senior SEO Specialist',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Technical SEO', 'Content Strategy', 'Link Building']
    },
    {
      name: 'Lisa Wang',
      position: 'Social Media Manager',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Social Strategy', 'Content Creation', 'Community Management']
    },
    {
      name: 'James Rodriguez',
      position: 'Email Marketing Specialist',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Email Automation', 'List Building', 'Segmentation']
    },
    {
      name: 'Emily Thompson',
      position: 'Content Marketing Manager',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Content Strategy', 'Copywriting', 'Brand Voice']
    },
    {
      name: 'Alex Martinez',
      position: 'Web Developer',
      image: 'https://images.pexels.com/photos/3184350/pexels-photo-3184350.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Landing Pages', 'CRO', 'Technical Implementation']
    },
    {
      name: 'Rachel Green',
      position: 'Account Manager',
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Client Relations', 'Project Management', 'Strategy Coordination']
    }
  ];

  const stats = [
    { icon: Users, number: '25+', label: 'Team Members' },
    { icon: Award, number: '50+', label: 'Certifications' },
    { icon: TrendingUp, number: '15+', label: 'Years Combined Experience' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEOHead 
        title="Our Expert Marketing Team | Meet the Professionals | Logical Marketing"
        description="Meet our team of marketing experts with 50+ certifications and 15+ years combined experience. Led by CEO Sarah Johnson and industry specialists."
        keywords="marketing team, digital marketing experts, marketing professionals, team members, marketing specialists"
        url="https://logicalmarketing.com/team"
      />
      {leadership.map((leader, index) => (
        <SchemaMarkup 
          key={index}
          type="person" 
          data={{
            name: leader.name,
            jobTitle: leader.position,
            description: leader.bio,
            image: leader.image,
            email: leader.social.email
          }} 
        />
      ))}
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-6">
              Meet Our Team
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              The Experts Behind
              <span className="text-red-600"> Your Success</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Our team of marketing professionals brings together decades of experience, cutting-edge expertise, and a passion for helping businesses grow.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries who guide our strategy and ensure every client receives exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{leader.name}</h3>
                  <p className="text-red-600 font-semibold mb-4">{leader.position}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{leader.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a href={leader.social.linkedin} className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                      <LinkedIn size={16} />
                    </a>
                    <a href={leader.social.twitter} className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                      <Twitter size={16} />
                    </a>
                    <a href={`mailto:${leader.social.email}`} className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Each team member brings specialized expertise and a commitment to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-red-600 font-semibold mb-4">{member.position}</p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our Culture
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              We believe that great results come from great people. Our team culture is built on collaboration, continuous learning, and a shared passion for helping our clients succeed.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Collaborative</h3>
                <p className="text-red-100 text-sm">We work together as one team, sharing knowledge and supporting each other's growth</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Growth-Minded</h3>
                <p className="text-red-100 text-sm">We're always learning, improving, and staying ahead of industry trends</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Excellence-Driven</h3>
                <p className="text-red-100 text-sm">We hold ourselves to the highest standards in everything we do</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're always looking for talented marketing professionals who share our passion for delivering exceptional results.
            </p>
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-bold text-lg">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;