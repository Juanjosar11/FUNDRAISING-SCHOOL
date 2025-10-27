import React from 'react';

interface SpeakerCardProps {
  name: string;
  title: string;
  image: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, title, image }) => {
  return (
    <div className="speaker-card">
      <figure className="speaker-image">
        <img 
          src={image} 
          alt={name}
          className="speaker-photo"
        />
      </figure>
      <div className="speaker-info">
        <h4 className="speaker-name">{name}</h4>
        <p className="speaker-title">{title}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;