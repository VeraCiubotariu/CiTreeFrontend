import GenericPage from './GenericPage';
import { IonButton, IonContent, IonLabel } from '@ionic/react';
import { useContext } from 'react';
import { AuthContext } from '../store/AuthProvider';
import './MyJourneyPage.css';
import { useHistory } from 'react-router-dom';

const MyJourneyPage = () => {
  const { authState } = useContext(AuthContext);
  const history = useHistory();

  return (
    <GenericPage hasFooter={false}>
      <IonContent className="ion-padding">
        <div className="title-content-page">
          <IonLabel className="title">
            {authState.user ? `${authState.user.firstName}'s` : 'My'} Journey
          </IonLabel>
          <IonButton
            style={{ alignSelf: 'flex-start' }}
            className="dark-button big-button"
            onClick={() => {}}
          >
            Saved Targets
          </IonButton>
          <IonButton
            style={{
              alignSelf: 'flex-end',
            }}
            className="light-button big-button"
            onClick={() => {
              history.push('/planted-trees');
            }}
          >
            Planted Trees
          </IonButton>
        </div>
      </IonContent>
    </GenericPage>
  );
};

export default MyJourneyPage;
