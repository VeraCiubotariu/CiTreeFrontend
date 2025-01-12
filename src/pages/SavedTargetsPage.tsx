import GenericPage from './GenericPage';
import { IonContent, IonLabel } from '@ionic/react';

const SavedTargetsPage = () => {
  return (
    <GenericPage hasFooter={false}>
      <IonContent className="ion-padding">
        <div className="title-content-page">
          <IonLabel className="title">These areas need some work...</IonLabel>
          <IonLabel className="subtitle">
            Here you can analyze your saved targets and start your tree planting
            journey!
          </IonLabel>
          <IonLabel className="paragraph">
            You haven't saved any targets yet.
          </IonLabel>
        </div>
      </IonContent>
    </GenericPage>
  );
};

export default SavedTargetsPage;
