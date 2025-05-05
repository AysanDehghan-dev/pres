// Slide1.js - Introduction slide
import React from 'react';
import Slide from '../Slide';
import { AccessibleEmoji } from '../Presentation';

const Slide1 = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h1 className="intro-title">InterimApp</h1>
      <h2 className="intro-subtitle">Plateforme de Recherche d'Emploi Intérimaire</h2>
      <div className="tech-icons">
        <div className="flex-col items-center anim-delay-1">
          <div className="emoji-container">
            <AccessibleEmoji symbol="</>" label="Code" />
          </div>
          <div>React/TypeScript</div>
        </div>
        <div className="flex-col items-center anim-delay-2">
          <div className="emoji-container">
            <AccessibleEmoji symbol="🖥️" label="Serveur" />
          </div>
          <div>Flask/MongoDB</div>
        </div>
        <div className="flex-col items-center anim-delay-3">
          <div className="emoji-container">
            <AccessibleEmoji symbol="🐳" label="Docker" />
          </div>
          <div>Docker</div>
        </div>
        <div className="flex-col items-center anim-delay-4">
          <div className="emoji-container">
            <AccessibleEmoji symbol="🐙" label="GitHub" />
          </div>
          <div>GitHub Actions</div>
        </div>
      </div>
      <p className="presenter-name">Présenté par: Aysan DEHGHAN</p>
      <div className="presentation-time">Présentation de projet • 15 minutes</div>
    </Slide>
  );
};

export default Slide1;