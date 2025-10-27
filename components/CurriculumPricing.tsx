import React from 'react';
import Button from './Button';

const CurriculumPricing: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-9 h-1 bg-gray-300"></div>
            <h4 className="text-lg font-medium text-black">Investment</h4>
            <div className="w-9 h-1 bg-gray-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 max-w-4xl leading-tight mx-auto">
            Invest in Your{' '}
            <span className="text-gray-400">Fundraising Success</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Full Program */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-blue-200">
            <div className="text-center mb-8">
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Limited Spots
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Full Program Access
              </h3>
              <p className="text-gray-600 mb-6">
                Complete 8-module curriculum with live sessions, mentorship, tools, templates, and lifetime access to recordings.
              </p>
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-800 mb-2">$1,450</div>
                <div className="text-lg text-gray-600">One-time investment</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-lg font-semibold text-gray-800">What's Included:</h4>
              {[
                "8 live interactive modules with Q&A",
                "Access to all speakers and mentors",
                "Pitch deck templates and frameworks",
                "Investor CRM and AI tools",
                "1-on-1 mentorship sessions",
                "Virtual Demo Day with real VCs",
                "Lifetime access to recordings",
                "Private founder community",
                "Money-back guarantee"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              variant="primary"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
              href="/apply"
            >
              Apply Now
            </Button>
          </div>

          {/* Scholarship Option */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                50% Off
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Half Scholarship Available
              </h3>
              <p className="text-gray-600 mb-6">
                We offer 50% scholarships to qualified founders from underrepresented backgrounds or emerging markets.
              </p>
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-800 mb-2">$725</div>
                <div className="text-lg text-gray-600">Scholarship pricing</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-lg font-semibold text-gray-800">Requirements:</h4>
              {[
                "Demonstrate financial need",
                "Commitment to complete the program",
                "Active startup with traction"
              ].map((requirement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>

            <Button
              variant="secondary"
              className="w-full"
              href="/apply?scholarship=true"
            >
              Apply for Scholarship
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumPricing;