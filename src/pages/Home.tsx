import { IonButton, IonContent, IonImg, IonLabel } from '@ionic/react';
import './Home.css';
import { PageFooter } from '../components/PageFooter';
import { useHistory } from 'react-router-dom';
import GenericPage from './GenericPage';
import React, { useContext } from 'react';
import { AuthContext } from '../store/AuthProvider';

type HomePageProps = {
  openLogin: () => void;
};

const Home: React.FC<HomePageProps> = ({ openLogin }) => {
  const history = useHistory();
  const { authState } = useContext(AuthContext);

  return (
    <GenericPage hasFooter={true}>
      <div className="home-content">
        <IonContent className="title-content">
          <div
            className="double-container"
            style={{
              overflow: 'hidden',
              paddingRight: '0px',
              paddingLeft: '0px',
            }}
          >
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
              columnGap: '200px',
              overflow: 'hidden',
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
              <br />
              <IonLabel className="paragraph">
                At CiTree, our mission is to empower individuals and communities
                to create greener, healthier cities. <br />
                By harnessing the power of technology and data, we make it easy
                to identify urban heat islands, visualize tree-planting efforts,
                and track environmental impact. Together, we can combat climate
                change, reduce urban heat, and make our cities sustainable for
                generations to come.
              </IonLabel>
            </div>
          </div>
        </IonContent>
        <PageFooter>
          <IonLabel className="paragraph">Want to be the change?</IonLabel>
          <IonButton
            className="dark-button"
            onClick={() => {
              authState.loggedIn ? history.push('/city-picker') : openLogin();
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
