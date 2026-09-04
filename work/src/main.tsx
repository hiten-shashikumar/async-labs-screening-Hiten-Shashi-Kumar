import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@fontsource/schibsted-grotesk/latin-400.css';
import '@fontsource/schibsted-grotesk/latin-600.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-500.css';

import './styles/tokens.css';
import './styles/base.css';

import { App } from './App';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element #root not found.');
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
