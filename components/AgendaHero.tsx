import React from 'react';

const AgendaHero: React.FC = () => {
  return (
    <header className="hero-section">
      <div className="hero-background">
        <canvas className="hero-canvas"></canvas>
        <div className="hero-pattern"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-word">AGENDA</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default AgendaHero;