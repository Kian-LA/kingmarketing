import React from 'react';
import { Shield, Eye, Lock, Users, Mail, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: Eye,
      content: [
        'Personal information you provide when filling out forms (name, email, phone number, company details)',
        'Website usage data through cookies and analytics tools',
        'Communication records when you contact us',
        'Marketing preferences and interaction data',
        'Technical information about your device and browser'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Users,
      content: [
        'Provide and improve our marketing services',
        'Communicate with you about our services and your account',
        'Send marketing communications (with your consent)',
        'Analyze website usage to improve user experience',
        'Comply with legal obligations and protect our rights'
      ]
    },
    {
      title: 'Information Sharing',
      icon: Shield,
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'We may share information with trusted service providers who assist in our operations',
        'We may disclose information when required by law or to protect our rights',
        'Anonymous, aggregated data may be shared for research or marketing purposes'
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        'We implement industry-standard security measures to protect your data',
        'All data transmission is encrypted using SSL technology',
        'Access to personal information is restricted to authorized personnel only',
        'Regular security audits and updates to our systems',
        'Secure data storage with backup and recovery procedures'
      ]
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
              Privacy Policy
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Your Privacy
              <span className="text-red-600"> Matters to Us</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Introduction</h2>
              <div className="prose prose-lg text-gray-600 dark:text-gray-300">
                <p>
                  KingMarketing ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p>
                  By using our website or services, you consent to the data practices described in this policy. If you do not agree with the practices described in this policy, please do not use our website or services.
                </p>
              </div>
            </div>

            {/* Main Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Additional Sections */}
            <div className="mt-16 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cookies and Tracking Technologies</h3>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Improve our website functionality and performance</li>
                  </ul>
                  <p>
                    You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Rights and Choices</h3>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Data Retention</h3>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Children's Privacy</h3>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Changes to This Policy</h3>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-16 bg-red-50 dark:bg-red-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700 dark:text-gray-300">privacy@kingmarketing.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-red-600 mt-0.5">📍</div>
                  <span className="text-gray-700 dark:text-gray-300">
                    123 Business District<br />
                    New York, NY 10001
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;