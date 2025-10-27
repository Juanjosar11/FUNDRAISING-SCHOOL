import React from 'react';

const CurriculumSchedule: React.FC = () => {
  const modules = [
    {
      number: 1,
      title: "How to Get Into Y Combinator",
      instructor: "Daniel Bilbao",
      label: "FREE MODULE",
      duration: "Thursday, October 29 – 2:00 PM (Colombian Time)",
      objectives: [
        "Write a clear and compelling first draft of your YC application",
        "Understand what YC looks for: team, problem, solution, market, traction",
        "Live writing of 3 key application answers",
        "Common mistakes and how to avoid them",
        "Application and interview workshop: the toughest questions a YC partner will ask you"
      ],
      deliverables: "Completed YC application draft"
    },
    {
      number: 2,
      title: "Should You Raise Capital?",
      subtitle: "Understanding the Fundraising Process",
      objectives: [
        "When a startup is not VC-backable",
        "When it's better to raise from angels vs. other options (bootstrapping, revenue-based financing)",
        "Real expectations: time, rejection, iteration",
        "Funding stages (Pre-Seed to Series A), realistic metrics (no hype)",
        "Understanding the full pipeline: first message, deck → meetings → due diligence → wire → money in the bank",
        "Anatomy of the process and players (angels vs VCs, pros & cons)",
        "Ideal fundraising timeline, and timeline for YC accelerators"
      ],
      deliverables: "Fundraising readiness assessment"
    },
    {
      number: 3,
      title: "The Fundraising Process & Types of Funds",
      subtitle: "Understanding Fund Economics and Investor Dynamics",
      objectives: [
        "Understanding Fund Economics and why VCs need 100x outcomes—adjust your narrative accordingly",
        "Types of venture funds and how they work: LPs, time horizons, '1–2 winners' model",
        "Valuation: driven by supply and demand; pre-money vs post-money",
        "12 questions you MUST ask a VC",
        "Investor list-building and how to create your own Investor-Market Fit: thesis + research (stage, ticket size, sector, geography, focus)",
        "Scoring and prioritizing 30–50 investors",
        "Simulate 3 valuation scenarios and how much equity to sell at each stage (10–20% per round), dilution vs runway"
      ],
      deliverables: "Prioritized investor list (30-50 targets) + valuation scenarios"
    },
    {
      number: 4,
      title: "How to Build a Winning Pitch Deck",
      subtitle: "Crafting Your Story and Perfecting Your Pitch",
      objectives: [
        "What investors actually want to hear: Pitch, Deck, Networking",
        "Build a 5-10 slide deck focused on: Team / Problem / Solution / Market / Traction",
        "Multiple deck versions + 'Deck killers': what NOT to include",
        "Write and practice your elevator pitch (30–60 seconds) with proof points and clear CTA",
        "Effective networking: where to meet investors and how to build real relationships even if you're not in Silicon Valley"
      ],
      deliverables: "Pitch deck v1 (5–10 slides) + elevator pitch script"
    },
    {
      number: 5,
      title: "How to Use AI to Raise Capital",
      subtitle: "Leveraging Technology While Building Human Connections",
      objectives: [
        "Best practices and AI tools for fundraising: e.g. DocSend",
        "How to use AI Agents while still building human connection in cold outreach → warm intros",
        "Build your Investor CRM Funnel with 30 segmented leads (angels / VCs / operators)",
        "AI prompts to write the 3 key investor emails that actually get opened",
        "Metrics and follow-up cadence",
        "Practice with an AI 'Angel Investor' (building our own GPT to simulate investor conversations)"
      ],
      deliverables: "Investor CRM with 30 leads + 3 email templates"
    },
    {
      number: 6,
      title: "Costly Mistakes and How to Avoid Them",
      subtitle: "Protecting Your Equity and Avoiding Common Pitfalls",
      objectives: [
        "Avoid bad dilution with SAFEs, cap tables, and option pools—how to structure healthy equity",
        "SAFE post-money vs priced round (clear cap table implications)",
        "Close legal/tax gaps: Delaware C-Corp + QSBS benefits for founders and investors",
        "Real case red flags: asking for 100k incorrectly, underestimating dilution, outsourced tech teams, nonsensical valuations, etc.",
        "Simulation of tough Q&A (typical early-stage VC questions)"
      ],
      deliverables: "Cap table model + legal checklist"
    },
    {
      number: 7,
      title: "After the Pitch",
      subtitle: "Due Diligence, Data Room & Closing",
      objectives: [
        "What happens after the 'yes', the due diligence process: what investors ask for and when",
        "Preparing a lightweight data room, legal checklist, key documents (Bylaws, Cap Table, Option Plan, 409A if applicable)",
        "Reverse due diligence: researching the investor (do this before accepting their money)",
        "How to create urgency and FOMO credibly without burning relationships (timelines, soft commits, insider terms)",
        "Investor updates and newsletters — including to those who said no"
      ],
      deliverables: "Data room template + investor research framework"
    },
    {
      number: 8,
      title: "Success Stories + Live Pitch Lab",
      subtitle: "Real Pitches, Real Feedback, Real Results",
      objectives: [
        "Case studies of founders who successfully raised capital",
        "Live pitching + tough Q&A",
        "Mentorship sessions",
        "Virtual Demo Day",
        "Direct feedback from VCs and angel investors on your pitch and Q&A performance"
      ],
      deliverables: "Refined pitch + investor feedback + next steps"
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-1 bg-gray-300"></div>
            <h4 className="text-lg font-medium text-black">Program Schedule</h4>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 max-w-4xl leading-tight">
            Transform your fundraising approach in{' '}
            <span className="text-gray-400">8 powerful modules</span>
          </h2>
        </div>

        {/* Modules */}
        <div className="space-y-12">
          {modules.map((module, index) => (
            <div
              key={module.number}
              className="bg-gray-50 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Module Number */}
              <div className="absolute top-8 right-8 text-8xl font-bold text-gray-200 opacity-50">
                {module.number}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    Module {module.number}: {module.title}
                  </h3>
                  {module.label && (
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {module.label}
                    </span>
                  )}
                </div>
                
                {module.subtitle && (
                  <p className="text-xl text-gray-600 mb-4">{module.subtitle}</p>
                )}
                
                {module.instructor && (
                  <p className="text-lg text-blue-600 font-medium mb-4">
                    Instructor: {module.instructor}
                  </p>
                )}
                
                {module.duration && (
                  <p className="text-lg text-gray-600 mb-6">{module.duration}</p>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Learning Objectives */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">
                      Learning Objectives:
                    </h4>
                    <ul className="space-y-3">
                      {module.objectives.map((objective, objIndex) => (
                        <li key={objIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">
                      Deliverables:
                    </h4>
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                      <p className="text-gray-700 font-medium">{module.deliverables}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSchedule;