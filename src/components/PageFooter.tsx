import { IonButton, IonContent, IonFooter, IonLabel } from '@ionic/react';
import './PageFooter.css';

export const PageFooter = ({ children }: { children: any }) => {
  return (
    <IonFooter>
      <div className="footer-container">{children}</div>
    </IonFooter>
  );
};
