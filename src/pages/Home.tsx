import {
  IonButton,
  IonButtons,
  IonContent,
  IonImg,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonToolbar,
  IonModal,
} from '@ionic/react';
import './Home.css';
import { Menu } from '../components/Menu';
import { PageFooter } from '../components/PageFooter';
import { useContext, useState } from 'react';
import { AuthContext } from '../store/AuthProvider';
import { loggedInOptions, notLoggedInOptions } from '../utils/menu-option-rows';
import LoginModal from '../components/LoginModal';
import SignupModal from '../components/SignupModal';

const Home: React.FC = () => {
  const { authState, login, signup, logout } = useContext(AuthContext);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  // Update the notLoggedInOptions to include the modal toggle
  const notLoggedInMenuOptions = {
    ...notLoggedInOptions,
    bottomOptions: [
      {
        optionName: 'Signup',
        onClick: () => setIsSignupModalOpen(true),
      },
      {
        optionName: 'Login',
        onClick: () => setLoginModalOpen(true), // Toggle modal on login
      },
    ],
  };

  const loggedInMenuOptions = {
    ...loggedInOptions,
    bottomOptions: [
      {
        optionName: 'Logout',
        onClick: logout,
      },
    ],
  };

  return (
    <>
      {authState.loggedIn ? (
        <Menu options={loggedInMenuOptions} />
      ) : (
        <Menu options={notLoggedInMenuOptions} />
      )}

      <IonPage id="main-content">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
        </IonToolbar>
        <IonContent className="title-content">
          <div className="double-container">
            <IonLabel className="title">
              Make your city
              <br />
              <span style={{ color: 'var(--light-green)' }}>greener</span> with
              CiTree
            </IonLabel>
            <IonImg src="src/resources/main-title.jpg" alt="Your ideal city" />
          </div>
        </IonContent>
        <IonContent className="ion-padding">
          <div
            className="double-container"
            style={{
              padding: '32px',
              columnGap: '64px',
            }}
          >
            <IonImg src="src/resources/our-purpose.png" alt="Our purpose" />
            <div className="bullet-point">
              <IonLabel className="subtitle">Our purpose</IonLabel>
              <IonLabel className="paragraph">
                We want to do stuff. We want to do stuff. We want stuffto do
                stuff. We want to do stuff. We want to do
                stuffstuffstuff.vstuffstuff stuff
              </IonLabel>
            </div>
          </div>
        </IonContent>
        <PageFooter>
          <IonLabel className="paragraph">Want to be the change?</IonLabel>
          <IonButton className="dark-button" onClick={() => {}}>
            Start Now
          </IonButton>
        </PageFooter>
      </IonPage>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLogin={login}
      />

      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onSignup={signup}
      />
    </>
  );
};

export default Home;
