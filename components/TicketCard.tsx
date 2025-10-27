import React from 'react';
import Button from './Button';

interface TicketCardProps {
  type: string;
  description: string;
  price: string;
  priceLabel: string;
  features: string[];
  isEarlyBird?: boolean;
}

const TicketCard: React.FC<TicketCardProps> = ({
  type,
  description,
  price,
  priceLabel,
  features,
  isEarlyBird = false
}) => {
  return (
    <div className="ticket-card">
      <div className="ticket-info">
        <div className="ticket-header">
          <h4 className="ticket-type">{type}</h4>
          <p className="ticket-description">{description}</p>
        </div>
        
        <div className="ticket-features">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-dot"></div>
              <p className="feature-text">{feature}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="ticket-pricing">
        <div className="pricing-background"></div>
        <div className="pricing-content">
          <div className="pricing-header">
            {isEarlyBird && (
              <div className="early-bird-label">
                <p className="label-text">Early Bird</p>
              </div>
            )}
            <div className="price-display">
              <h2 className="price">{price}</h2>
              <h4 className="price-label">{priceLabel}</h4>
            </div>
          </div>
          
          <Button 
            variant="secondary" 
            className="ticket-button"
            href="https://www.framer.com"
            target="_blank"
          >
            Buy Ticket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;