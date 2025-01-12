import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './store/AuthProvider';
import { IonReactRouter } from '@ionic/react-router';
import { TreesProvider } from './store/TreesProvider';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <TreesProvider>
        <IonReactRouter>
          <App />
        </IonReactRouter>
      </TreesProvider>
    </AuthProvider>
  </React.StrictMode>
);
