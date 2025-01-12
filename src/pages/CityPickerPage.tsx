import { IonButton, IonContent, IonLabel } from '@ionic/react';
import { PageFooter } from '../components/PageFooter';
import GenericPage from './GenericPage';
import MapPicker from '../components/MapPicker';
import { useHistory } from 'react-router-dom';

const CityPickerPage = () => {
  const history = useHistory();

  return (
    <GenericPage hasFooter={true}>
      <IonContent className="ion-padding">
        <div className="double-container">
          <div>
            <IonLabel className="title">Your journey starts now</IonLabel>
            <br />
            <IonLabel className="paragraph">Pick your city...</IonLabel>
          </div>
          <MapPicker location={undefined}></MapPicker>
        </div>
      </IonContent>
      <PageFooter>
        <IonButton
          className="dark-button"
          onClick={() => {
            history.push('/target-view');
          }}
        >
          Continue
        </IonButton>
      </PageFooter>
    </GenericPage>
  );
};

export default CityPickerPage;
