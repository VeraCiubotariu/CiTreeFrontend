import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { LoginProvider } from './store/LoginProvider';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>
);
