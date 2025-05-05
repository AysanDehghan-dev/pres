// Slide4.js - Fonctionnalités clés
import React from 'react';
import Slide from '../Slide';

const Slide4 = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2>Fonctionnalités clés</h2>
      <div className="grid-cols-2">
        <div className="card">
          <div className="flex-row items-center mb-4">
            <span role="img" aria-label="Clé" className="emoji mr-4">🔑</span>
            <h3>Système d'authentification</h3>
          </div>
          <p className="mb-4">Système dual pour candidats et entreprises, sécurisé par JWT.</p>
          <div className="code-block">
            <code>
              • JWT pour l'authentification<br />
              • Routes protégées par rôle<br />
              • Hachage des mots de passe
            </code>
          </div>
        </div>
        
        <div className="card">
          <div className="flex-row items-center mb-4">
            <span role="img" aria-label="Loupe" className="emoji mr-4">🔍</span>
            <h3>Recherche avancée</h3>
          </div>
          <p className="mb-4">Filtrage multi-critères pour trouver les offres pertinentes.</p>
          <div className="code-block">
            <code>
              • Filtres par mot-clé<br />
              • Filtres par localisation<br />
              • Filtres par type de contrat
            </code>
          </div>
        </div>
        
        <div className="card">
          <div className="flex-row items-center mb-4">
            <span role="img" aria-label="Utilisateurs" className="emoji mr-4">👥</span>
            <h3>Gestion des profils</h3>
          </div>
          <p className="mb-4">Profils détaillés pour candidats et entreprises.</p>
          <div className="code-block">
            <code>
              • Expériences professionnelles<br />
              • Formations et compétences<br />
              • Profil entreprise avec description
            </code>
          </div>
        </div>
        
        <div className="card">
          <div className="flex-row items-center mb-4">
            <span role="img" aria-label="Mallette" className="emoji mr-4">💼</span>
            <h3>Gestion des candidatures</h3>
          </div>
          <p className="mb-4">Suivi complet du processus de candidature.</p>
          <div className="code-block">
            <code>
              • Statuts de candidature<br />
              • Lettres de motivation<br />
              • Historique des candidatures
            </code>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide4;