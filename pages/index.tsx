import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.12, 0.23, 0.5, 1] }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                FUNDRAISING SCHOOL
              </span>
            </h1>
            
            <motion.p
              className="text-2xl md:text-3xl text-blue-400 mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              For entrepreneurs by entrepreneurs
            </motion.p>
            
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Master the art of fundraising with top 1% founders in a 3-week intensive program. 
              Connect with fellow visionaries, learn from proven investors, and redefine what's possible for your business.
            </motion.p>
            
            <motion.div
              className="text-lg md:text-xl text-gray-200 mb-8 space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="font-semibold">November 25th - December 13th, 2025</p>
              <p>Tuesdays & Thursdays at 6:00 PM | Saturdays at 1:00 PM (Colombian Time)</p>
              <p className="text-2xl font-bold text-green-400">$1,450 <span className="text-base text-gray-300">• Half scholarships available</span></p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                variant="primary"
                size="lg"
                href="/apply"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                }
              >
                Apply Now
              </Button>
              
              <Button
                variant="glassy"
                size="lg"
                href="https://youtube.com/@FundraisingSchool-SeriesA"
                target="_blank"
              >
                Watch Free Videos
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="w-9 h-1 bg-gray-300"></div>
              <h4 className="text-lg font-medium text-white">Why Fundraising School?</h4>
              <div className="w-9 h-1 bg-gray-300"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Learn fundraising from those who've done it successfully
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-4">
              Hosted by Andrés Bilbao and Angélica Carrillo
            </p>
            <p className="text-base text-gray-400 max-w-4xl mx-auto">
              Fundraising School is conducted in English because fundraising happens mostly in this language across the world. 
              This program is part of 30x.org but operates independently to serve the global entrepreneurial community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Learn from Top 1% Founders',
                description: 'Get insights from successful entrepreneurs and investors who have raised millions and built category-defining companies.',
                icon: '🎯',
              },
              {
                title: 'Practical, Not Theoretical',
                description: 'No fluff. Every module includes actionable frameworks, templates, and tools you can use immediately to raise capital.',
                icon: '🛠️',
              },
              {
                title: 'Money-Back Guarantee',
                description: 'We\'re so confident in our curriculum that we offer a full refund to any founder who can\'t apply the knowledge and fundraise.',
                icon: '✅',
              },
              {
                title: 'Supporting Founder Innovation',
                description: 'All proceeds fund AI tools developed specifically for founders to accelerate their fundraising journey.',
                icon: '🤖',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Content Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="w-9 h-1 bg-gray-300"></div>
              <h4 className="text-lg font-medium text-white">Start Learning Today</h4>
              <div className="w-9 h-1 bg-gray-300"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Access Free Fundraising Content
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Watch our free video series on YouTube to get a taste of what you'll learn in the full program.
            </p>
            <p className="text-blue-400 font-medium mb-8">
              YouTube Channel: @FundraisingSchool-SeriesA
            </p>
            <Button
              variant="primary"
              size="lg"
              href="https://youtube.com/@FundraisingSchool-SeriesA"
              target="_blank"
            >
              Watch Free Videos
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;