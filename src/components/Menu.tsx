import { IonContent, IonLabel, IonMenu, IonMenuToggle } from '@ionic/react';

import { menuController } from '@ionic/core';

import './Menu.css';
import { MenuOption, MenuTypes } from '../model/menu-option-types';
import React from 'react';

export const Menu = ({ options }: { options: MenuTypes }) => {
  const handleOnClick = async (onClick: () => void) => {
    await menuController.close(this);
    onClick();
  };

  const mapOptions = (options: MenuOption[]) => {
    return (
      <>
        {options.map((option) => (
          <IonMenuToggle key={`${option.optionName}`}>
            <IonLabel
              className="option"
              onClick={() => handleOnClick(option.onClick)}
            >
              {option.optionName}
            </IonLabel>
          </IonMenuToggle>
        ))}
      </>
    );
  };

  return (
    <IonMenu contentId="main-content">
      <IonContent className="menu-content">
        <div className="menu-container">
          <div className="top-options">{mapOptions(options.topOptions)}</div>
          <div className="bottom-options">
            {mapOptions(options.bottomOptions)}
          </div>
        </div>
      </IonContent>
    </IonMenu>
  );
};
