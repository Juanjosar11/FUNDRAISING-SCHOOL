import React from 'react';
import Layout from '../components/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout title="About - Fundraising School">
      <section className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-25">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8">
            <span className="inline-block animate-fade-in-up">
              ABOUT
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            For entrepreneurs by entrepreneurs
          </p>
          <div className="text-lg text-gray-300 space-y-6 max-w-3xl mx-auto">
            <p>
              Fundraising School is conducted in English because fundraising happens mostly in this language across the world. 
              This program is part of 30x.org but operates independently to serve the global entrepreneurial community.
            </p>
            <p>
              Hosted by Andrés Bilbao and Angélica Carrillo, this intensive 3-week program brings together top 1% founders 
              to share their fundraising expertise with the next generation of entrepreneurs.
            </p>
            <p>
              All proceeds from Fundraising School fund the development of AI tools specifically designed for founders 
              to accelerate their fundraising journey.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;