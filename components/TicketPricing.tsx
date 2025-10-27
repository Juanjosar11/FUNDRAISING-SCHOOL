import React from 'react';
import TicketCard from './TicketCard';

const TicketPricing: React.FC = () => {
  const tickets = [
    {
      type: "General Admission",
      description: "Access to the main stage, exhibitions, and standard networking sessions throughout the summit.",
      price: "$299",
      priceLabel: "Single admission",
      features: [
        "Entry to keynote sessions",
        "Access to tech expo floor",
        "Standard networking lounge",
        "Summit welcome kit"
      ],
      isEarlyBird: true
    },
    {
      type: "VIP Pass",
      description: "Premium experience with priority access, exclusive sessions, and VIP-only networking opportunities.",
      price: "$599",
      priceLabel: "Single admission",
      features: [
        "Priority seating at all sessions",
        "Access to VIP lounge",
        "Invitation to speaker dinner",
        "Premium summit kit"
      ],
      isEarlyBird: true
    },
    {
      type: "Team Pass",
      description: "Perfect for companies or teams attending together. Includes access for 5 members and group perks.",
      price: "$1299",
      priceLabel: "5 Members",
      features: [
        "5 full-access passes",
        "Reserved group seating",
        "Team branding opportunities",
        "Group photo with keynote speakers"
      ],
      isEarlyBird: true
    }
  ];

  return (
    <section className="pricing-section" id="tickets">
      <div className="pricing-container">
        <div className="pricing-header">
          <div className="section-tag">
            <div className="tag-line"></div>
            <h4 className="tag-text">Registration</h4>
          </div>
          <h2 className="section-title">
            Secure Your Spot at{' '}
            <span className="text-muted">AIcron Tech Summit Today!</span>
          </h2>
        </div>

        <div className="pricing-content">
          <div className="pricing-graphic">
            <video 
              src="/videos/pricing-animation.webm" 
              loop 
              muted 
              playsInline
              className="pricing-video"
            />
          </div>
          
          <div className="pricing-cards">
            {tickets.map((ticket, index) => (
              <TicketCard
                key={index}
                type={ticket.type}
                description={ticket.description}
                price={ticket.price}
                priceLabel={ticket.priceLabel}
                features={ticket.features}
                isEarlyBird={ticket.isEarlyBird}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketPricing;