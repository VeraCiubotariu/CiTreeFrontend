import { IonButton, IonContent, IonLabel } from '@ionic/react';
import { PageFooter } from '../components/PageFooter';
import GenericPage from './GenericPage';
import MapPicker from '../components/MapPicker';

const CityPickerPage = () => {
  return (
    <GenericPage>
      <IonContent className="ion-padding">
        <div className="double-container">
          <div>
            <IonLabel className="title">Your journey starts now</IonLabel>
            <br />
            <IonLabel className="paragraph">Pick your city...</IonLabel>
          </div>
          <MapPicker></MapPicker>
        </div>
      </IonContent>
      <PageFooter>
        <IonButton className="dark-button" onClick={() => {}}>
          Continue
        </IonButton>
      </PageFooter>
    </GenericPage>
  );
};

export default CityPickerPage;
