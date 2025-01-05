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
import { PageFooter } from '../components/PageFooter';
import { useHistory } from 'react-router-dom';
import GenericPage from './GenericPage';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <GenericPage>
      <div id="main-content">
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
              columnGap: '64px',
            }}
          >
            <IonImg
              style={{ height: '50%', width: '40%' }}
              src="src/resources/our-purpose.png"
              alt="Our purpose"
            />
            <div>
              <IonLabel className="subtitle">Our purpose</IonLabel>
              <br />
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
          <IonButton
            className="dark-button"
            onClick={() => {
              history.push('/city-picker');
            }}
          >
            Start Now
          </IonButton>
        </PageFooter>
      </div>
    </GenericPage>
  );
};

export default Home;
