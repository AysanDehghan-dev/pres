// Slide5.js - Méthodologie de développement
import React from 'react';
import Slide from '../Slide';

const Slide5 = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
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
    </Slide>
  );
};

export default Slide5;