// Slide3.js - Architecture technique
import React from 'react';
import Slide from '../Slide';

const Slide3 = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2>Architecture technique</h2>
      <div className="flex-row gap-8">
        <div className="flex-col" style={{ flex: 1 }}>
          <div className="card card-blue mb-4">
            <h3 className="flex-row items-center mb-4">
              <span role="img" aria-label="Code" className="emoji mr-4">&lt;/&gt;</span> Frontend
            </h3>
            <ul className="styled-list">
              <li><span className="font-medium">React</span> avec TypeScript</li>
              <li><span className="font-medium">Styled Components</span> pour le styling</li>
              <li><span className="font-medium">Context API</span> pour la gestion d'état</li>
              <li><span className="font-medium">Composants réutilisables</span> modulaires</li>
              <li><span className="font-medium">Responsive Design</span> pour tous appareils</li>
            </ul>
          </div>
        </div>
        <div className="flex-col" style={{ flex: 1 }}>
          <div className="card card-blue mb-4">
            <h3 className="flex-row items-center mb-4">
              <span role="img" aria-label="Serveur" className="emoji mr-4">🖥️</span> Backend
            </h3>
            <ul className="styled-list">
              <li><span className="font-medium">Flask</span> pour l'API REST</li>
              <li><span className="font-medium">MongoDB</span> pour la persistance</li>
              <li><span className="font-medium">JWT</span> pour l'authentification</li>
              <li>Architecture en <span className="font-medium">couches</span> (routes, modèles, schémas)</li>
              <li>Validation des données avec <span className="font-medium">Marshmallow</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 justify-center" style={{ width: '100%' }}>
        <div className="card card-blue" style={{ width: '100%' }}>
          <h3 className="flex-row items-center mb-4">
            <span role="img" aria-label="Layout" className="emoji mr-4">📱</span> Infrastructure
          </h3>
          <div className="grid-cols-2" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="flex-row items-center">
              <span role="img" aria-label="Docker" className="emoji mr-4">🐳</span>
              <span>Containerisation Docker</span>
            </div>
            <div className="flex-row items-center">
              <span role="img" aria-label="GitHub" className="emoji mr-4">🐙</span>
              <span>CI/CD avec GitHub Actions</span>
            </div>
            <div className="flex-row items-center">
              <span role="img" aria-label="Git Branch" className="emoji mr-4">🔀</span>
              <span>Git Submodules</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide3;