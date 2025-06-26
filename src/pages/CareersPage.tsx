import React from 'react';
import { MapPin, Clock, DollarSign, Users, Heart, Zap, CheckCircle, ArrowRight, Briefcase } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CareersPage = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses and equity options'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Remote work options and flexible hours to maintain work-life balance'
    },
    {
      icon: Zap,
      title: 'Growth Opportunities',
      description: 'Continuous learning budget, conference attendance, and career development'
    },
    {
      icon: Users,
      title: 'Amazing Team',
      description: 'Work with passionate, talented professionals in a collaborative environment'
    },
    {
      icon: Briefcase,
      title: 'Cutting-Edge Projects',
      description: 'Work on innovative campaigns for exciting clients across various industries'
    }
  ];

  const openPositions = [
    {
      title: 'Senior PPC Specialist',
      department: 'Paid Advertising',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Lead Google Ads and Facebook Ads campaigns for our enterprise clients. Manage budgets of $100K+ monthly and drive exceptional ROAS.',
      requirements: [
        'Google Ads & Facebook Ads certification',
        '3+ years managing large ad budgets',
        'Experience with e-commerce and B2B campaigns',
        'Strong analytical and optimization skills',
        'Excellent communication skills'
      ]
    },
    {
      title: 'Content Marketing Manager',
      department: 'Content & SEO',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Develop and execute content strategies that drive organic traffic and engagement. Create compelling content across multiple formats and channels.',
      requirements: [
        'Proven content marketing experience',
        'Excellent writing and editing skills',
        'SEO knowledge and experience',
        'Experience with content management systems',
        'Creative thinking and strategic mindset'
      ]
    },
    {
      title: 'Marketing Data Analyst',
      department: 'Analytics',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Turn complex marketing data into actionable insights. Build dashboards, analyze campaign performance, and provide strategic recommendations.',
      requirements: [
        'Strong analytical and statistical skills',
        'Experience with Google Analytics, SQL, and Excel',
        'Knowledge of marketing attribution models',
        'Data visualization experience (Tableau, Power BI)',
        'Bachelor\'s degree in relevant field'
      ]
    },
    {
      title: 'Social Media Strategist',
      department: 'Social Media',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Develop and implement social media strategies across platforms. Manage client accounts and drive engagement and growth.',
      requirements: [
        'Experience managing social media for brands',
        'Knowledge of all major social platforms',
        'Content creation and design skills',
        'Community management experience',
        'Understanding of social media analytics'
      ]
    },
    {
      title: 'Email Marketing Specialist',
      department: 'Email Marketing',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Design and execute email marketing campaigns that drive conversions. Build automation workflows and optimize for deliverability.',
      requirements: [
        'Experience with email marketing platforms',
        'Knowledge of email automation and segmentation',
        'HTML/CSS skills for email design',
        'A/B testing experience',
        'Understanding of deliverability best practices'
      ]
    },
    {
      title: 'Marketing Intern',
      department: 'Various',
      location: 'Remote / New York',
      type: 'Internship',
      experience: 'Entry Level',
      description: 'Gain hands-on experience across multiple marketing disciplines. Support various teams and learn from industry experts.',
      requirements: [
        'Currently pursuing marketing or related degree',
        'Strong interest in digital marketing',
        'Excellent communication skills',
        'Eagerness to learn and grow',
        'Basic knowledge of marketing concepts'
      ]
    }
  ];

  const values = [
    'Results-driven mindset',
    'Continuous learning and growth',
    'Collaborative team spirit',
    'Client-first approach',
    'Innovation and creativity',
    'Integrity and transparency'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-6">
              Join Our Team
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Build Your Career in
              <span className="text-red-600"> Digital Marketing</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join a team of passionate marketing professionals who are shaping the future of digital marketing. Grow your skills, work on exciting projects, and make a real impact.
            </p>
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-bold text-lg flex items-center mx-auto">
              View Open Positions
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We believe that great people create great results. That's why we've built a culture that supports growth, innovation, and work-life balance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These values guide everything we do and shape the kind of people we want on our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-gray-900 dark:text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to take your marketing career to the next level? Check out our current openings.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-1" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        {position.experience}
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{position.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We've designed our hiring process to be thorough yet efficient, ensuring the right fit for both you and our team.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Application</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Submit your resume and cover letter through our application portal</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Phone Screen</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Initial conversation with our HR team to discuss your background and interests</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Skills Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Practical exercise or case study relevant to the role you're applying for</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Final Interview</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Meet with the team and discuss how you'll contribute to our mission</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Don't see a position that fits? We're always interested in hearing from talented marketing professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/free-audit"
                className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold text-lg"
              >
                Send Us Your Resume
              </Link>
              <Link 
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-200 font-bold text-lg"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;