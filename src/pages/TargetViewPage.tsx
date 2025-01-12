import GenericPage from './GenericPage';
import { IonButton, IonContent, IonLabel } from '@ionic/react';
import TargetViewer from '../components/TargetViewer';
import { PageFooter } from '../components/PageFooter';
import { useHistory } from 'react-router-dom';

const TargetViewPage = () => {
  const history = useHistory();

  return (
    <GenericPage hasFooter={true}>
      <IonContent className="ion-padding">
        <div className="title-content-page">
          <IonLabel className="title">The red areas need some work</IonLabel>
          <TargetViewer />
        </div>
      </IonContent>
      <PageFooter>
        <IonLabel className="paragraph">You can save this target </IonLabel>
        <IonButton className="dark-button" onClick={() => {}}>
          Save
        </IonButton>
        <IonLabel className="paragraph"> ...or go back </IonLabel>
        <IonButton
          className="light-button"
          onClick={() => {
            history.push('/city-picker');
          }}
        >
          Go Back
        </IonButton>
      </PageFooter>
    </GenericPage>
  );
};

export default TargetViewPage;
