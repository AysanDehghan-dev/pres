// Slide6.js - Containerisation & CI/CD
import React from 'react';
import Slide from '../Slide';

const Slide6 = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
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
    </Slide>
  );
};

export default Slide6;