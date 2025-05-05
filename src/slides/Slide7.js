// Slide7.js - Structure du projet - Version améliorée
import React from 'react';
import Slide from '../Slide';

const Slide7 = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2>Structure du projet</h2>
      
      <div className="flex-row gap-8 w-full">
        <div className="flex-col" style={{ flex: 1 }}>
          <div className="card mb-4">
            <h3 className="flex-row items-center mb-4">
              <span role="img" aria-label="Code" className="emoji mr-4">&lt;/&gt;</span> Frontend
            </h3>
            <div className="code-block tree-structure" style={{ height: '24rem', overflow: 'auto' }}>
              <pre className="text-left">
                <code>
                  <span className="directory">frontend/</span><br />
                  ├── <span className="directory">public/</span><br />
                  ├── <span className="directory">src/</span><br />
                  │   ├── <span className="directory">components/</span><br />
                  │   │   ├── <span className="directory">auth/</span><br />
                  │   │   │   ├── <span className="file">LoginModal.tsx</span><br />
                  │   │   │   ├── <span className="file">PrivateRoute.tsx</span><br />
                  │   │   │   └── <span className="file">RegisterModal.tsx</span><br />
                  │   │   ├── <span className="directory">jobs/</span><br />
                  │   │   │   ├── <span className="file">JobCard.tsx</span><br />
                  │   │   │   └── <span className="file">JobDetailModal.tsx</span><br />
                  │   │   ├── <span className="directory">layout/</span><br />
                  │   │   │   ├── <span className="file">Footer.tsx</span><br />
                  │   │   │   ├── <span className="file">Header.tsx</span><br />
                  │   │   │   └── <span className="file">Layout.tsx</span><br />
                  │   │   └── <span className="directory">ui/</span><br />
                  │   │       ├── <span className="file">Button.tsx</span><br />
                  │   │       ├── <span className="file">Card.tsx</span><br />
                  │   │       ├── <span className="file">Input.tsx</span><br />
                  │   │       └── <span className="file">Modal.tsx</span><br />
                  │   ├── <span className="directory">context/</span><br />
                  │   │   ├── <span className="file">AuthContext.tsx</span><br />
                  │   │   └── <span className="file">ThemeContext.tsx</span><br />
                  │   ├── <span className="directory">hooks/</span><br />
                  │   │   ├── <span className="file">useAuth.tsx</span><br />
                  │   │   └── <span className="file">useTheme.tsx</span><br />
                  │   ├── <span className="directory">pages/</span><br />
                  │   │   ├── <span className="file">Home.tsx</span><br />
                  │   │   ├── <span className="file">Jobs.tsx</span><br />
                  │   │   └── <span className="file">Login.tsx</span><br />
                  │   ├── <span className="directory">types/</span><br />
                  │   │   └── <span className="file">index.ts</span><br />
                  │   └── <span className="directory">utils/</span><br />
                  │       └── <span className="file">formatters.ts</span><br />
                </code>
              </pre>
            </div>
          </div>
        </div>
        
        <div className="flex-col" style={{ flex: 1 }}>
          <div className="card mb-4">
            <h3 className="flex-row items-center mb-4">
              <span role="img" aria-label="Serveur" className="emoji mr-4">🖥️</span> Backend
            </h3>
            <div className="code-block tree-structure" style={{ height: '24rem', overflow: 'auto' }}>
              <pre className="text-left">
                <code>
                  <span className="directory">backend/</span><br />
                  ├── <span className="directory">app/</span><br />
                  │   ├── <span className="file">__init__.py</span><br />
                  │   ├── <span className="directory">models/</span><br />
                  │   │   ├── <span className="file">__init__.py</span><br />
                  │   │   ├── <span className="file">application.py</span><br />
                  │   │   ├── <span className="file">company.py</span><br />
                  │   │   ├── <span className="file">job.py</span><br />
                  │   │   └── <span className="file">user.py</span><br />
                  │   ├── <span className="directory">routes/</span><br />
                  │   │   ├── <span className="file">__init__.py</span><br />
                  │   │   ├── <span className="file">auth.py</span><br />
                  │   │   ├── <span className="file">companies.py</span><br />
                  │   │   ├── <span className="file">jobs.py</span><br />
                  │   │   └── <span className="file">users.py</span><br />
                  │   ├── <span className="directory">schemas/</span><br />
                  │   │   ├── <span className="file">__init__.py</span><br />
                  │   │   ├── <span className="file">application_schema.py</span><br />
                  │   │   ├── <span className="file">company_schema.py</span><br />
                  │   │   ├── <span className="file">job_schema.py</span><br />
                  │   │   └── <span className="file">user_schema.py</span><br />
                  │   └── <span className="directory">utils/</span><br />
                  │       ├── <span className="file">__init__.py</span><br />
                  │       ├── <span className="file">db.py</span><br />
                  │       └── <span className="file">security.py</span><br />
                  ├── <span className="file">config.py</span><br />
                  ├── <span className="file">Dockerfile</span><br />
                  ├── <span className="file">pyproject.toml</span><br />
                  └── <span className="file">wsgi.py</span><br />
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-center mt-6">
        Architecture modulaire favorisant la maintenabilité et la séparation des responsabilités
      </p>
    </Slide>
  );
};

export default Slide7;