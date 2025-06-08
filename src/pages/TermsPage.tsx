import React from 'react';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-6">
              Terms of Service
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Terms of
              <span className="text-red-600"> Service</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Please read these terms carefully before using our services. By accessing or using KingMarketing's services, you agree to be bound by these terms.
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
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Agreement to Terms</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  These Terms of Service ("Terms") govern your use of KingMarketing's website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
                </p>
                <p>
                  We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of our services after any changes constitutes acceptance of the new Terms.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Scale className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Services</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  KingMarketing provides digital marketing services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Search Engine Marketing (SEO and PPC)</li>
                  <li>Social Media Advertising and Management</li>
                  <li>Conversion Rate Optimization</li>
                  <li>Email Marketing</li>
                  <li>Content Marketing and Strategy</li>
                  <li>Marketing Analytics and Reporting</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice to our clients.
                </p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">User Responsibilities</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>By using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not engage in any fraudulent or deceptive practices</li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Payment Terms</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  Payment terms are specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Invoices are due within 30 days of receipt unless otherwise specified</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Services may be suspended for non-payment</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>Prices are subject to change with 30 days notice</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Intellectual Property</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  All content, materials, and intellectual property created by KingMarketing remain our property unless explicitly transferred through a written agreement. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Marketing strategies and methodologies</li>
                  <li>Reports and analytics</li>
                  <li>Creative materials and content</li>
                  <li>Software and tools developed for your campaigns</li>
                </ul>
                <p>
                  Clients retain ownership of their brand assets, content, and data provided to us for service delivery.
                </p>
              </div>
            </div>

            {/* Confidentiality */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Confidentiality</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  We understand the sensitive nature of business information and commit to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintain strict confidentiality of all client information</li>
                  <li>Use client information solely for service delivery</li>
                  <li>Implement appropriate security measures</li>
                  <li>Not disclose information to third parties without consent</li>
                  <li>Return or destroy confidential information upon request</li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Limitation of Liability</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  To the maximum extent permitted by law, KingMarketing shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, revenue, or business opportunities</li>
                  <li>Data loss or corruption</li>
                  <li>Third-party actions or platform changes</li>
                  <li>Force majeure events beyond our control</li>
                </ul>
                <p>
                  Our total liability shall not exceed the amount paid by the client for services in the 12 months preceding the claim.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Termination</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  Either party may terminate services with written notice as specified in the service agreement. Upon termination:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All outstanding invoices become immediately due</li>
                  <li>Access to our services and platforms will be revoked</li>
                  <li>We will provide final reports and data as agreed</li>
                  <li>Confidentiality obligations continue indefinitely</li>
                </ul>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Governing Law</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts of New York.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Questions About These Terms?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>Email: legal@kingmarketing.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Business District, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsPage;