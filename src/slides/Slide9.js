// Slide9.js - Conclusion & Perspectives
import React from 'react';
import Slide from '../Slide';

const Slide9 = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2>Conclusion & Perspectives</h2>
      <div className="flex-col mb-8" style={{ width: '100%' }}>
        <div className="card mb-8">
          <h3 className="mb-4">Bilan du projet</h3>
          <div className="grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">Réalisations clés</h4>
              <ul className="styled-list">
                <li>Application full-stack fonctionnelle</li>
                <li>Architecture modulaire et maintenable</li>
                <li>Expérience utilisateur fluide</li>
                <li>Infrastructure moderne (Docker, CI/CD)</li>
                <li>Développement collaboratif via Git</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Apprentissages</h4>
              <ul className="styled-list">
                <li>Gestion de projet technique</li>
                <li>Pratiques DevOps et CI/CD</li>
                <li>Utilisation des Git Submodules</li>
                <li>Conception d'API REST</li>
                <li>Stratégies d'authentification</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3 className="mb-4">Perspectives d'évolution</h3>
          <div className="grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">Améliorations techniques</h4>
              <ul className="styled-list">
                <li>Tests end-to-end automatisés</li>
                <li>Optimisation des performances</li>
                <li>PWA pour une expérience mobile</li>
                <li>Infrastructure serverless</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Nouvelles fonctionnalités</h4>
              <ul className="styled-list">
                <li>Système de messagerie intégré</li>
                <li>Notifications en temps réel</li>
                <li>Algorithme de matching candidat/emploi</li>
                <li>Intégration de calendriers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)' }}>
        Merci de votre attention !
      </div>
    </Slide>
  );
};

export default Slide9;