// Slide7.js - Structure du projet
import React from 'react';
import Slide from '../Slide';

// Component that displays the project structure
const Slide7 = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2>Structure du projet</h2>
      <div className="flex-row" style={{ width: '100%', justifyContent: 'flex-start' }}>
        <div className="flex-col" style={{ width: '45%', padding: '1rem', backgroundColor: '#f8faff', borderRadius: '8px', marginRight: '2%' }}>
          <h3 className="flex-row items-center mb-4">
            <span role="img" aria-label="Code" className="emoji mr-4">&lt;/&gt;</span> Frontend
          </h3>
          <div className="code-block tree-view" style={{ height: '24rem', overflow: 'auto', backgroundColor: 'transparent', border: 'none', textAlign: 'left' }}>
            <pre style={{ color: '#333', textAlign: 'left', margin: 0 }}>
              <code>
                <span style={{ color: '#0550ae' }}>frontend/</span><br />
                ├── <span style={{ color: '#0550ae' }}>public/</span><br />
                └── <span style={{ color: '#0550ae' }}>src/</span><br />
                &nbsp;&nbsp;&nbsp; ├── <span style={{ color: '#0550ae' }}>components/</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#0550ae' }}>auth/</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>LoginModal.tsx</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>PrivateRoute.tsx</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; └── <span style={{ color: '#cf222e' }}>RegisterModal.tsx</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#0550ae' }}>jobs/</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>JobCard.tsx</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; └── <span style={{ color: '#cf222e' }}>JobDetailModal.tsx</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#0550ae' }}>layout/</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>Footer.tsx</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>Header.tsx</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; └── <span style={{ color: '#cf222e' }}>Layout.tsx</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; └── <span style={{ color: '#0550ae' }}>ui/</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>Button.tsx</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>Card.tsx</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>Input.tsx</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; └── <span style={{ color: '#cf222e' }}>Modal.tsx</span><br />
                &nbsp;&nbsp;&nbsp; ├── <span style={{ color: '#0550ae' }}>context/</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>AuthContext.tsx</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; └── <span style={{ color: '#cf222e' }}>ThemeContext.tsx</span><br />
                &nbsp;&nbsp;&nbsp; ├── <span style={{ color: '#0550ae' }}>hooks/</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>useAuth.tsx</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; └── <span style={{ color: '#cf222e' }}>useTheme.tsx</span><br />
                &nbsp;&nbsp;&nbsp; ├── <span style={{ color: '#0550ae' }}>pages/</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>Home.tsx</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>Jobs.tsx</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; └── <span style={{ color: '#cf222e' }}>Login.tsx</span><br />
                &nbsp;&nbsp;&nbsp; ├── <span style={{ color: '#0550ae' }}>types/</span><br />
                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; └── <span style={{ color: '#cf222e' }}>index.ts</span><br />
                &nbsp;&nbsp;&nbsp; └── <span style={{ color: '#0550ae' }}>utils/</span><br />
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; └── <span style={{ color: '#cf222e' }}>formatters.ts</span>
              </code>
            </pre>
          </div>
        </div>
        <div className="flex-col" style={{ width: '45%', padding: '1rem', backgroundColor: '#f8faff', borderRadius: '8px' }}>
          <h3 className="flex-row items-center mb-4">
            <span role="img" aria-label="Serveur" className="emoji mr-4">🖥️</span> Backend
          </h3>
          <div className="code-block tree-view" style={{ height: '24rem', overflow: 'auto', backgroundColor: 'transparent', border: 'none', textAlign: 'left' }}>
            <pre style={{ color: '#333', textAlign: 'left', margin: 0 }}>
              <code>
                <span style={{ color: '#0550ae' }}>backend/</span><br />
                ├── <span style={{ color: '#0550ae' }}>app/</span><br />
                │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>__init__.py</span><br />
                │&nbsp;&nbsp; ├── <span style={{ color: '#0550ae' }}>models/</span><br />
                │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>__init__.py</span><br />
                │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>application.py</span><br />
                │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>company.py</span><br />
                │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>job.py</span><br />
                │&nbsp;&nbsp; │&nbsp;&nbsp; └── <span style={{ color: '#cf222e' }}>user.py</span><br />
                │&nbsp;&nbsp; ├── <span style={{ color: '#0550ae' }}>routes/</span><br />
                │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>__init__.py</span><br />
                │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>auth.py</span><br />
                │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>companies.py</span><br />
                │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>jobs.py</span><br />
                │&nbsp;&nbsp; │&nbsp;&nbsp; └── <span style={{ color: '#cf222e' }}>users.py</span><br />
                │&nbsp;&nbsp; ├── <span style={{ color: '#0550ae' }}>schemas/</span><br />
                │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>__init__.py</span><br />
                │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>application_schema.py</span><br />
                │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>company_schema.py</span><br />
                │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>job_schema.py</span><br />
                │&nbsp;&nbsp; │&nbsp;&nbsp; └── <span style={{ color: '#cf222e' }}>user_schema.py</span><br />
                │&nbsp;&nbsp; └── <span style={{ color: '#0550ae' }}>utils/</span><br />
                │&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>__init__.py</span><br />
                │&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; ├── <span style={{ color: '#cf222e' }}>db.py</span><br />
                │&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; └── <span style={{ color: '#cf222e' }}>security.py</span><br />
                ├── <span style={{ color: '#cf222e' }}>config.py</span><br />
                ├── <span style={{ color: '#cf222e' }}>Dockerfile</span><br />
                ├── <span style={{ color: '#cf222e' }}>pyproject.toml</span><br />
                └── <span style={{ color: '#cf222e' }}>wsgi.py</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
      <p className="text-left mt-4">
        Architecture modulaire favorisant la maintenabilité et la séparation des responsabilités
      </p>
    </Slide>
  );
};

export default Slide7;