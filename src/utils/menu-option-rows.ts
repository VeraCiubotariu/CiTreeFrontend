import { MenuTypes } from '../model/menu-option-types';

export const notLoggedInOptions: MenuTypes = {
  topOptions: [],
  bottomOptions: [
    { optionName: 'Signup', onClick: () => {} },
    { optionName: 'Login', onClick: () => {} },
  ],
};

export const loggedInOptions: MenuTypes = {
  topOptions: [
    { optionName: 'My Journey', onClick: () => {} },
    { optionName: 'Scan a City', onClick: () => {} },
  ],
  bottomOptions: [
    { optionName: 'My Account', onClick: () => {} },
    { optionName: 'Logout', onClick: () => {} },
  ],
};
