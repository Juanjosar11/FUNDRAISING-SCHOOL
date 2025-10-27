import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const SpeakersPage: React.FC = () => {
  const speakerCategories = [
    {
      category: 'Venture Capitalists',
      description: 'Partners from leading funds',
      speakers: [
        {
          name: 'Jessica Chen',
          title: 'Partner, Andreessen Horowitz',
          bio: 'Led investments in 50+ startups with $2B+ in exits.',
          image: '/api/placeholder/300/300',
        },
        {
          name: 'Marcus Rodriguez',
          title: 'General Partner, Sequoia Capital',
          bio: 'Former founder turned VC, specializing in B2B SaaS.',
          image: '/api/placeholder/300/300',
        }
      ]
    },
    {
      category: 'Successful Founders',
      description: 'CEOs who\'ve raised Series A+',
      speakers: [
        {
          name: 'Sarah Kim',
          title: 'CEO, TechFlow (Raised $50M)',
          bio: 'Built and scaled TechFlow from idea to $100M ARR.',
          image: '/api/placeholder/300/300',
        },
        {
          name: 'David Park',
          title: 'Founder, DataCorp (Acquired)',
          bio: 'Successfully exited DataCorp for $500M after 3 funding rounds.',
          image: '/api/placeholder/300/300',
        }
      ]
    },
    {
      category: 'Angel Investors',
      description: 'Active angels with portfolio exits',
      speakers: [
        {
          name: 'Maria Santos',
          title: 'Angel Investor, Former Uber VP',
          bio: 'Invested in 100+ startups, 15 unicorns in portfolio.',
          image: '/api/placeholder/300/300',
        }
      ]
    }
  ];

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SPEAKERS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Learn from the Best
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Past speakers include top-tier investors, successful founders, and industry leaders who have collectively raised and deployed billions in venture capital.
            </p>
          </motion.div>

          <div className="space-y-16">
            {speakerCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.category}</h2>
                  <p className="text-lg text-gray-400">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.speakers.map((speaker, index) => (
                    <motion.div
                      key={speaker.name}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                      <p className="text-blue-400 mb-4">{speaker.title}</p>
                      <p className="text-gray-300 text-sm">{speaker.bio}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
            
            <div className="text-center">
              <p className="text-lg text-gray-400 mb-6">
                Past speakers include leaders from Y Combinator, Techstars, and top-tier VCs
              </p>
              <motion.button
                className="bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Show More Speakers
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpeakersPage;