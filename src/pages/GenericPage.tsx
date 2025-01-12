import { IonButtons, IonMenuButton, IonPage, IonToolbar } from '@ionic/react';

const GenericPage = ({
  hasFooter,
  children,
  ...props
}: {
  hasFooter: boolean;
  children: any;
}) => (
  <IonPage className="page-layout" id="main-content" {...props}>
    <IonToolbar>
      <IonButtons>
        <IonMenuButton></IonMenuButton>
      </IonButtons>
    </IonToolbar>
    {hasFooter ? (
      <div style={{ height: '89%' }}>{children}</div>
    ) : (
      <div>{children}</div>
    )}
  </IonPage>
);

export default GenericPage;
