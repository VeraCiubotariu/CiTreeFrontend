import React, { useState } from 'react';
import {
  IonModal,
  IonButton,
  IonInput,
  IonLabel,
  IonItem,
  IonContent,
} from '@ionic/react';
import './Modal.css';

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (username: string, password: string) => void;
};

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLogin,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const handleLogin = async () => {
    try {
      await onLogin(username, password);
      handleClose();
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  };

  const handleClose = () => {
    setUsername('');
    setPassword('');
    setErrorMessage(undefined);
    onClose();
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonContent>
        <div className="modal-content">
          <h2 className="subtitle" style={{ color: 'var(--light-beige)' }}>
            Login
          </h2>
          {errorMessage && (
            <IonLabel style={{ color: 'red' }}>{errorMessage}</IonLabel>
          )}
          <IonItem>
            <IonLabel position="stacked">Username</IonLabel>
            <IonInput
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
              placeholder="Enter your username"
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
              placeholder="Enter your password"
            />
          </IonItem>
          <IonButton className="dark-button" onClick={handleLogin}>
            Login
          </IonButton>
          <IonButton className="light-button" onClick={handleClose}>
            Cancel
          </IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default LoginModal;
