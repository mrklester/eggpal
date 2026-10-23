import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRoutes from './routes/AppRoutes';
import { Provider } from './components/ui/provider';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </Provider>
  </StrictMode>,
);
