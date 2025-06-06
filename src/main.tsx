import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "../node_modules/modern-normalize/modern-normalize.css";
import './index.css';
import App from './components/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
