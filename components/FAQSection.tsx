import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who is this program for?",
      answer: "Fundraising School is designed for early-stage founders (pre-seed to Series A) who are serious about raising venture capital. Whether you're preparing for your first fundraise or refining your approach, this program will give you the frameworks, tools, and connections you need."
    },
    {
      question: "What's included in the $1,450 investment?",
      answer: "You get complete access to all 8 modules, live sessions with top investors and founders, 1-on-1 mentorship, pitch deck templates, investor CRM tools, AI prompts, a virtual demo day with real VCs, lifetime access to all recordings, and entry to our private founder community. Plus, our money-back guarantee."
    },
    {
      question: "Are scholarships available?",
      answer: "Yes! We offer 50% scholarships to qualified founders from underrepresented backgrounds or emerging markets. Apply through our scholarship application form and demonstrate your commitment and financial need."
    },
    {
      question: "What's the money-back guarantee?",
      answer: "We're confident in our curriculum. If you complete the program, apply the frameworks and tools we teach, and still can't make progress on your fundraising, we'll refund your investment. No questions asked."
    },
    {
      question: "Do I need to be technical or have a tech startup?",
      answer: "No. While many of our examples come from tech startups, the fundraising principles apply to any VC-backable business. We've had founders from SaaS, fintech, healthcare, consumer products, and more."
    },
    {
      question: "What timezone are the sessions in?",
      answer: "All live sessions are in Colombian Time (COT). Tuesdays and Thursdays at 6:00 PM, Saturdays at 1:00 PM. However, all sessions are recorded, so you can watch them anytime if you can't attend live."
    },
    {
      question: "Will sessions be recorded?",
      answer: "Yes! Every session is recorded and you get lifetime access. You can rewatch modules, review frameworks, and reference materials whenever you need them."
    },
    {
      question: "Why is the program in English?",
      answer: "Fundraising happens mostly in English across the world. Whether you're pitching to Silicon Valley VCs, European investors, or global angels, English is the language of venture capital. This program prepares you for that reality."
    },
    {
      question: "Where do the proceeds go?",
      answer: "All proceeds from Fundraising School fund the development of AI tools specifically designed for founders to accelerate their fundraising journey. We're building technology to help entrepreneurs succeed."
    },
    {
      question: "Is Module 1 really free?",
      answer: "Yes! Module 1 (How to Get Into Y Combinator) is completely free. You can also access free content on our YouTube channel @FundraisingSchool-SeriesA to get a taste of our teaching style before committing to the full program."
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-9 h-1 bg-gray-300"></div>
            <h4 className="text-lg font-medium text-black">Q&A</h4>
            <div className="w-9 h-1 bg-gray-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 max-w-4xl leading-tight mx-auto">
            Got questions?{' '}
            <span className="text-gray-400">We've got answers.</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-gray-600 transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;