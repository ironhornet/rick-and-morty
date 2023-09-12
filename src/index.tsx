import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { providers } from './providers/providers';
import { ComposeProviders } from './hocs/ComposeProviders/ComposeProviders';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ComposeProviders providers={providers}>
      <App />
    </ComposeProviders>
  </React.StrictMode>
);
