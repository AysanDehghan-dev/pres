import React, { useState, useEffect } from 'react';
import './Presentation.css';

// Composant pour les émojis accessibles
const AccessibleEmoji = ({ symbol, label }) => (
  <span role="img" aria-label={label} className="emoji">
    {symbol}
  </span>
);

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Contenu des diapositives
  const slidesContent = [
    // Slide 1: Introduction
    <div key="1" className="slide">
      <h1 className="intro-title">InterimApp</h1>
      <h2 className="intro-subtitle">Plateforme de Recherche d'Emploi Intérimaire</h2>
      <div className="tech-icons">
        <div className="flex-col items-center anim-delay-1">
          <div className="emoji-container">
            <AccessibleEmoji symbol="&lt;/&gt;" label="Code" />
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
    </div>,
    
    // Slide 2: Vue d'ensemble du projet
    <div key="2" className="slide">
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
    </div>,
    
    // Slide 3: Architecture technique
    <div key="3" className="slide">
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
    </div>,
    
    // Slide 4: Fonctionnalités clés
    <div key="4" className="slide">
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
    </div>,
    
    // Slide 5: Méthodologie de développement
    <div key="5" className="slide">
      <h2>Méthodologie de développement</h2>
      <div className="flex-col" style={{ width: '100%' }}>
        <div className="card mb-8">
          <div className="flex-row items-center mb-4">
            <span role="img" aria-label="Branches Git" className="emoji mr-4">🔀</span>
            <h3>Stratégie de Branching Git</h3>
          </div>
          <div className="flex-row">
            <div className="flex-col" style={{ width: '50%', paddingRight: '1rem' }}>
              <p>Nous avons utilisé une stratégie de branching basée sur Gitflow :</p>
              <ul className="styled-list mt-4">
                <li><span className="font-medium">main</span> : code de production</li>
                <li><span className="font-medium">develop</span> : intégration continue</li>
                <li><span className="font-medium">feature/***</span> : nouvelles fonctionnalités</li>
                <li><span className="font-medium">bugfix/***</span> : corrections de bugs</li>
              </ul>
            </div>
            <div className="flex-col" style={{ width: '50%' }}>
              <div className="code-block">
                <pre>
                  <code>
                    # Nouvelle fonctionnalité<br />
                    git checkout -b feature/search<br />
                    # Après développement<br />
                    git push origin feature/search<br />
                    # Pull request vers develop<br />
                    # Merge vers main après validation
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex-row items-center mb-4">
            <span role="img" aria-label="Fusion Git" className="emoji mr-4">🔄</span>
            <h3>Git Submodules</h3>
          </div>
          <p className="mb-4">Gestion séparée des repos frontend et backend avec intégration via Git Submodules.</p>
          <div className="flex-row">
            <div className="flex-col" style={{ width: '50%' }}>
              <div className="code-block mr-4">
                <pre>
                  <code>
                    # Structure du projet<br />
                    interimapp/<br />
                    ├── frontend/  # submodule<br />
                    ├── backend/   # submodule<br />
                    └── docker-compose.yml
                  </code>
                </pre>
              </div>
            </div>
            <div className="flex-col" style={{ width: '50%' }}>
              <div className="code-block">
                <pre>
                  <code>
                    # Config submodules<br />
                    git submodule add git@github.com:user/frontend.git<br />
                    git submodule add git@github.com:user/backend.git<br />
                    <br />
                    # Mise à jour<br />
                    git submodule update --remote
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    
    // Slide 6: Docker & CI/CD
    <div key="6" className="slide">
      <h2>Containerisation & CI/CD</h2>
      <div className="flex-col" style={{ width: '100%' }}>
        <div className="card mb-8">
          <div className="flex-row items-center mb-4">
            <span role="img" aria-label="Docker" className="emoji mr-4">🐳</span>
            <h3>Docker & Docker Compose</h3>
          </div>
          <div className="flex-row">
            <div className="flex-col" style={{ width: '50%', paddingRight: '1rem' }}>
              <p>Avantages de la containerisation :</p>
              <ul className="styled-list mt-4">
                <li>Environnement de développement homogène</li>
                <li>Configuration rapide et reproductible</li>
                <li>Isolation des services</li>
                <li>Déploiement simplifié</li>
              </ul>
            </div>
            <div className="flex-col" style={{ width: '50%' }}>
              <div className="code-block">
                <pre>
                  <code>
                    # docker-compose.dev.yml<br />
                    services:<br />
                    &nbsp;&nbsp;backend:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;build: ./backend<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ./backend:/app<br />
                    &nbsp;&nbsp;mongo:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;image: mongo:6.0<br />
                    &nbsp;&nbsp;frontend:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;build: ./frontend<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ./frontend:/app
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex-row items-center mb-4">
            <span role="img" aria-label="GitHub" className="emoji mr-4">🐙</span>
            <h3>GitHub Actions pour CI/CD</h3>
          </div>
          <div className="flex-row">
            <div className="flex-col" style={{ width: '50%', paddingRight: '1rem' }}>
              <p>Pipeline CI/CD mis en place :</p>
              <ul className="styled-list mt-4">
                <li>Tests automatisés</li>
                <li>Linting et vérification de qualité</li>
                <li>Construction des images Docker</li>
                <li>Déploiement automatique</li>
              </ul>
            </div>
            <div className="flex-col" style={{ width: '50%' }}>
              <div className="code-block">
                <pre>
                  <code>
                    # .github/workflows/main.yml<br />
                    name: CI/CD Pipeline<br />
                    on: [push, pull_request]<br />
                    jobs:<br />
                    &nbsp;&nbsp;test:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;steps:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- uses: actions/checkout@v3<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name: Run tests<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run: docker-compose run backend pytest
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    
    // Slide 7: Structure du projet
    <div key="7" className="slide">
      <h2>Structure du projet</h2>
      <div className="flex-row" style={{ width: '100%' }}>
        <div className="flex-col" style={{ width: '50%', padding: '1rem' }}>
          <h3 className="flex-row items-center mb-4">
            <span role="img" aria-label="Code" className="emoji mr-4">&lt;/&gt;</span> Frontend
          </h3>
          <div className="code-block" style={{ height: '24rem', overflow: 'auto' }}>
            <pre>
              <code>
              frontend/<br />
              ├── public/<br />
              └── src/<br />
                 ├── components/<br />
                 │  ├── auth/<br />
                 │  │  ├── LoginModal.tsx<br />
                 │  │  ├── PrivateRoute.tsx<br />
                 │  │  └── RegisterModal.tsx<br />
                 │  ├── jobs/<br />
                 │  │  ├── JobCard.tsx<br />
                 │  │  └── JobDetailModal.tsx<br />
                 │  ├── layout/<br />
                 │  │  ├── Footer.tsx<br />
                 │  │  ├── Header.tsx<br />
                 │  │  └── Layout.tsx<br />
                 │  └── ui/<br />
                 │     ├── Button.tsx<br />
                 │     ├── Card.tsx<br />
                 │     ├── Input.tsx<br />
                 │     └── Modal.tsx<br />
                 ├── context/<br />
                 │  ├── AuthContext.tsx<br />
                 │  └── ThemeContext.tsx<br />
                 ├── hooks/<br />
                 │  ├── useAuth.tsx<br />
                 │  └── useTheme.tsx<br />
                 ├── pages/<br />
                 │  ├── Home.tsx<br />
                 │  ├── Jobs.tsx<br />
                 │  └── Login.tsx<br />
                 ├── types/<br />
                 │  └── index.ts<br />
                 └── utils/<br />
                    └── formatters.ts
              </code>
            </pre>
          </div>
        </div>
        <div className="flex-col" style={{ width: '50%', padding: '1rem' }}>
          <h3 className="flex-row items-center mb-4">
            <span role="img" aria-label="Serveur" className="emoji mr-4">🖥️</span> Backend
          </h3>
          <div className="code-block" style={{ height: '24rem', overflow: 'auto' }}>
            <pre>
              <code>
              backend/<br />
              ├── app/<br />
              │  ├── __init__.py<br />
              │  ├── models/<br />
              │  │  ├── __init__.py<br />
              │  │  ├── application.py<br />
              │  │  ├── company.py<br />
              │  │  ├── job.py<br />
              │  │  └── user.py<br />
              │  ├── routes/<br />
              │  │  ├── __init__.py<br />
              │  │  ├── auth.py<br />
              │  │  ├── companies.py<br />
              │  │  ├── jobs.py<br />
              │  │  └── users.py<br />
              │  ├── schemas/<br />
              │  │  ├── __init__.py<br />
              │  │  ├── application_schema.py<br />
              │  │  ├── company_schema.py<br />
              │  │  ├── job_schema.py<br />
              │  │  └── user_schema.py<br />
              │  └── utils/<br />
              │     ├── __init__.py<br />
              │     ├── db.py<br />
              │     └── security.py<br />
              ├── config.py<br />
              ├── Dockerfile<br />
              ├── pyproject.toml<br />
              └── wsgi.py
              </code>
            </pre>
          </div>
        </div>
      </div>
      <p className="text-center mt-4">
        Architecture modulaire favorisant la maintenabilité et la séparation des responsabilités
      </p>
    </div>,
    
    // Slide 8: Démonstration
    <div key="8" className="slide">
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
    </div>,
    
    // Slide 9: Conclusion & perspectives
    <div key="9" className="slide">
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
    </div>
  ];
  
  // Ajouter la classe active à la diapositive courante
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }, [currentSlide]);
  
  const nextSlide = () => {
    if (currentSlide < slidesContent.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  return (
    <div className="presentation-container">
      <div className="slide-container">
        {slidesContent.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            {slide.props.children}
          </div>
        ))}
        
        <div className="navigation">
          <button 
            className="nav-button"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            ←
          </button>
          <div className="slide-indicator">
            {currentSlide + 1} / {slidesContent.length}
          </div>
          <button 
            className="nav-button"
            onClick={nextSlide}
            disabled={currentSlide === slidesContent.length - 1}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;