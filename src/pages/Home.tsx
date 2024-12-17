import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonImg,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Home.css';
import { Menu } from '../components/Menu';
import { PageFooter } from '../components/PageFooter';
import { useContext } from 'react';
import { LoginContext } from '../store/LoginProvider';
import { loggedInOptions, notLoggedInOptions } from '../utils/menu-option-rows';

const Home: React.FC = () => {
  const { loggedIn } = useContext(LoginContext);

  return (
    <>
      {loggedIn ? (
        <Menu options={loggedInOptions} />
      ) : (
        <Menu options={notLoggedInOptions} />
      )}

      <IonPage id="main-content">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
        </IonToolbar>
        <IonContent className="title-content">
          <div className="title-container">
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
            className="title-container"
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
    </>
  );
};

export default Home;
