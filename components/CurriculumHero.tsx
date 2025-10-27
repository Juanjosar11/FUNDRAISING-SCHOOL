import React from 'react';

const CurriculumHero: React.FC = () => {
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
        <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-none">
          <span className="inline-block animate-fade-in-up">
            CURRICULUM
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-8 max-w-2xl mx-auto">
          8-Module Comprehensive Program
        </p>
        <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
          A structured, intensive curriculum designed to take you from fundraising novice to confident capital raiser in just 3 weeks.
        </p>
      </div>
    </section>
  );
};

export default CurriculumHero;