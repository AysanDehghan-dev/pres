// Slide8.js - Démonstration du produit
import React from 'react';
import Slide from '../Slide';

const Slide8 = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2>Démonstration du produit</h2>
      <div className="flex-col items-center" style={{ width: '100%' }}>
        <div className="card card-blue mb-8" style={{ width: '100%' }}>
          <h3 className="text-center mb-4">Parcours utilisateur principal</h3>
          <div className="flex-row justify-center" style={{ flexWrap: 'wrap' }}>
            <div className="flex-col items-center" style={{ margin: '0 1rem' }}>
              <div className="emoji-container">
                <span role="img" aria-label="Clé">🔑</span>
              </div>
              <div className="text-center">
                <p className="font-medium">Inscription/<br />Connexion</p>
              </div>
            </div>
            <div className="text-3xl" style={{ margin: '0 0.5rem', alignSelf: 'center' }}>→</div>
            <div className="flex-col items-center" style={{ margin: '0 1rem' }}>
              <div className="emoji-container">
                <span role="img" aria-label="Loupe">🔍</span>
              </div>
              <div className="text-center">
                <p className="font-medium">Recherche<br />d'emploi</p>
              </div>
            </div>
            <div className="text-3xl" style={{ margin: '0 0.5rem', alignSelf: 'center' }}>→</div>
            <div className="flex-col items-center" style={{ margin: '0 1rem' }}>
              <div className="emoji-container">
                <span role="img" aria-label="Mallette">💼</span>
              </div>
              <div className="text-center">
                <p className="font-medium">Candidature</p>
              </div>
            </div>
            <div className="text-3xl" style={{ margin: '0 0.5rem', alignSelf: 'center' }}>→</div>
            <div className="flex-col items-center" style={{ margin: '0 1rem' }}>
              <div className="emoji-container">
                <span role="img" aria-label="Mobile">📱</span>
              </div>
              <div className="text-center">
                <p className="font-medium">Suivi des<br />candidatures</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card" style={{ width: '100%' }}>
          <h3 className="mb-4">Points de démonstration</h3>
          <div className="grid-cols-2">
            <div className="flex-row items-center">
              <div className="emoji mr-2">•</div>
              <p>Inscription et authentification (candidat et entreprise)</p>
            </div>
            <div className="flex-row items-center">
              <div className="emoji mr-2">•</div>
              <p>Recherche d'emploi avec filtres</p>
            </div>
            <div className="flex-row items-center">
              <div className="emoji mr-2">•</div>
              <p>Création et publication d'une offre d'emploi</p>
            </div>
            <div className="flex-row items-center">
              <div className="emoji mr-2">•</div>
              <p>Candidature à une offre d'emploi</p>
            </div>
            <div className="flex-row items-center">
              <div className="emoji mr-2">•</div>
              <p>Gestion des profils utilisateurs</p>
            </div>
            <div className="flex-row items-center">
              <div className="emoji mr-2">•</div>
              <p>Basculement thème clair/sombre</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide8;