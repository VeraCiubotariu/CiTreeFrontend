import {
  IonButton,
  IonButtons,
  IonContent,
  IonImg,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonToolbar,
} from '@ionic/react';

const GenericPage = ({ children, ...props }: { children: any }) => (
  <IonPage className="page-layout" {...props}>
    <IonToolbar>
      <IonButtons>
        <IonMenuButton></IonMenuButton>
      </IonButtons>
    </IonToolbar>
    <div style={{ height: '89%' }}>{children}</div>
  </IonPage>
);

export default GenericPage;
