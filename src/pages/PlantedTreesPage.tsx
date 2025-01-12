import GenericPage from './GenericPage';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import './PlantedTreesPage.css';
import React from 'react';
import TreeList from '../components/TreeList';
import { useHistory } from 'react-router-dom';

const PlantedTreesPage = () => {
  const history = useHistory();

  return (
    <GenericPage hasFooter={false}>
      <IonContent className="ion-padding">
        <div className="title-content-page">
          <IonLabel className="title">
            All your hard work towards a greener future
          </IonLabel>
          <IonLabel className="subtitle">
            Here you can visualize the trees you planted and the impact you
            made.
          </IonLabel>
          <TreeList />
        </div>
      </IonContent>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton onClick={() => history.push('/new-tree')}>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
      </IonFab>
    </GenericPage>
  );
};

export default PlantedTreesPage;
