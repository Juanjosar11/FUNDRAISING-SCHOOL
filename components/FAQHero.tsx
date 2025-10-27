import React from 'react';

const FAQHero: React.FC = () => {
  return (
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
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8">
          <span className="inline-block animate-fade-in-up">
            FREQUENTLY ASKED QUESTIONS
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-8 max-w-2xl mx-auto">
          Everything you need to know about Fundraising School
        </p>
      </div>
    </section>
  );
};

export default FAQHero;