// Slide2.js - Vue d'ensemble du projet
import React from 'react';
import Slide from '../Slide';

const Slide2 = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2>Vue d'ensemble du projet</h2>
      <div className="mb-8 text-center">
        InterimApp est une plateforme moderne qui connecte les demandeurs d'emploi aux opportunités d'intérim.
      </div>
      <div className="grid-cols-2">
        <div className="card card-blue">
          <div className="flex-row items-center mb-4">
            <span role="img" aria-label="Utilisateurs" className="emoji mr-4">👥</span>
            <h3>Pour les candidats</h3>
          </div>
          <ul className="styled-list">
            <li>Recherche d'offres personnalisée</li>
            <li>Profil professionnel complet</li>
            <li>Suivi des candidatures</li>
            <li>Interface intuitive</li>
          </ul>
        </div>
        <div className="card card-blue">
          <div className="flex-row items-center mb-4">
            <span role="img" aria-label="Mallette" className="emoji mr-4">💼</span>
            <h3>Pour les entreprises</h3>
          </div>
          <ul className="styled-list">
            <li>Publication d'offres d'emploi</li>
            <li>Gestion des candidatures</li>
            <li>Profil d'entreprise détaillé</li>
            <li>Accès à une base de candidats</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
};

export default Slide2;