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
import { User } from '../model/user-types';

type SignupModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSignup: (user: User) => void;
};

const SignupModal: React.FC<SignupModalProps> = ({
  isOpen,
  onClose,
  onSignup,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const handleSignup = async () => {
    try {
      if (password !== confirmedPassword) {
        throw new Error('Passwords do not match');
      }

      await onSignup({ username, password, firstName, lastName });
      handleClose();
    } catch (e: any) {
      console.log('Setting error message...');
      setErrorMessage(e.message);
    }
  };

  const handleClose = () => {
    setUsername('');
    setPassword('');
    setConfirmedPassword('');
    setFirstName('');
    setLastName('');
    setErrorMessage(undefined);
    onClose();
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonContent>
        <div className="modal-content">
          <h2 className="subtitle" style={{ color: 'var(--light-beige)' }}>
            Signup
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
            <IonLabel position="stacked">First Name</IonLabel>
            <IonInput
              value={firstName}
              onIonChange={(e) => setFirstName(e.detail.value!)}
              placeholder="Enter your first name"
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Last Name</IonLabel>
            <IonInput
              value={lastName}
              onIonChange={(e) => setLastName(e.detail.value!)}
              placeholder="Enter your last name"
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
          <IonItem>
            <IonLabel position="stacked">Confirm Password</IonLabel>
            <IonInput
              type="password"
              value={confirmedPassword}
              onIonChange={(e) => setConfirmedPassword(e.detail.value!)}
              placeholder="Confirm your password"
            />
          </IonItem>
          <IonButton className="dark-button" onClick={handleSignup}>
            Signup
          </IonButton>
          <IonButton className="light-button" onClick={handleClose}>
            Cancel
          </IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default SignupModal;
