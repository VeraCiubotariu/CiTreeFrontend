import {
  IonContent,
  IonHeader,
  IonLabel,
  IonMenu,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import './Menu.css';
import { MenuOption, MenuTypes } from '../model/menu-option-types';

export const Menu = ({ options }: { options: MenuTypes }) => {
  return (
    <IonMenu contentId="main-content">
      <IonContent className="menu-content">
        <div className="menu-container">
          <div className="top-options">
            {options.topOptions.map((option) => (
              <IonLabel className="option" onClick={option.onClick}>
                {option.optionName}
              </IonLabel>
            ))}
          </div>
          <div className="bottom-options">
            {options.bottomOptions.map((option) => (
              <IonLabel className="option" onClick={option.onClick}>
                {option.optionName}
              </IonLabel>
            ))}
          </div>
        </div>
      </IonContent>
    </IonMenu>
  );
};
