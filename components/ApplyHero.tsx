import React from 'react';

const ApplyHero: React.FC = () => {
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
            APPLY
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-8 max-w-2xl mx-auto">
          Join the next cohort of successful fundraisers
        </p>
        <div className="mt-8 text-lg text-gray-200 space-y-2">
          <p className="font-semibold">November 25th - December 13th, 2025</p>
          <p>Limited spots available</p>
        </div>
      </div>
    </section>
  );
};

export default ApplyHero;