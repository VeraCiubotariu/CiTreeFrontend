import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './store/AuthProvider';
import { IonReactRouter } from '@ionic/react-router';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <IonReactRouter>
        <App />
      </IonReactRouter>
    </AuthProvider>
  </React.StrictMode>
);
