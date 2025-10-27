import React from 'react';
import SpeakerCard from './SpeakerCard';

interface Speaker {
  name: string;
  title: string;
  image: string;
}

interface SessionCardProps {
  time: string;
  title: string;
  description: string;
  speakers: Speaker[];
}

const SessionCard: React.FC<SessionCardProps> = ({ time, title, description, speakers }) => {
  return (
    <div className="session-card">
      <div className="session-time">
        <h4 className="time-text">{time}</h4>
      </div>
      
      <div className="session-content">
        <div className="session-info">
          <h3 className="session-title">{title}</h3>
          <p className="session-description">{description}</p>
        </div>
        
        {speakers.length > 0 && (
          <div className="session-speakers">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                title={speaker.title}
                image={speaker.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionCard;