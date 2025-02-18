import { Redirect, Route, useHistory } from 'react-router-dom';
import {
  IonApp,
  IonButtons,
  IonMenuButton,
  IonRouterOutlet,
  IonToolbar,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './App.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { Menu } from './components/Menu';
import { loggedInOptions, notLoggedInOptions } from './utils/menu-option-rows';
import React, { useContext, useState } from 'react';
import { AuthContext } from './store/AuthProvider';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import { PrivateRoute } from './utils/PrivateRoute';
import CityPickerPage from './pages/CityPickerPage';
import MyJourneyPage from './pages/MyJourneyPage';
import PlantedTreesPage from './pages/PlantedTreesPage';
import TreeEditPage from './pages/TreeEditPage';
import TargetViewPage from './pages/TargetViewPage';
import SavedTargetsPage from './pages/SavedTargetsPage';

setupIonicReact();

const App: React.FC = () => {
  const history = useHistory();
  const { authState, login, signup, logout } = useContext(AuthContext);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const notLoggedInMenuOptions = {
    ...notLoggedInOptions,
    bottomOptions: [
      {
        optionName: 'Signup',
        onClick: () => setIsSignupModalOpen(true),
      },
      {
        optionName: 'Login',
        onClick: () => setLoginModalOpen(true), // Toggle modal on login
      },
    ],
  };

  const loggedInMenuOptions = {
    ...loggedInOptions,
    topOptions: [
      { optionName: 'Home', onClick: () => history.push('/home') },
      { optionName: 'My Journey', onClick: () => history.push('/my-journey') },
      {
        optionName: 'Scan a City',
        onClick: () => history.push('/city-picker'),
      },
    ],
    bottomOptions: [
      {
        optionName: 'Logout',
        onClick: logout,
      },
    ],
  };

  return (
    <IonApp>
      {authState.loggedIn ? (
        <Menu options={loggedInMenuOptions} />
      ) : (
        <Menu options={notLoggedInMenuOptions} />
      )}

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLogin={login}
        onSignup={() => {
          setIsSignupModalOpen(true);
        }}
      />

      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onSignup={signup}
      />

      <IonRouterOutlet>
        <Route exact path="/home">
          <Home openLogin={() => setLoginModalOpen(true)} />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <PrivateRoute exact path="/city-picker" component={CityPickerPage} />
        <PrivateRoute exact path="/my-journey" component={MyJourneyPage} />
        <PrivateRoute
          exact
          path="/planted-trees"
          component={PlantedTreesPage}
        />
        <PrivateRoute
          exact
          path="/planted-trees/:id"
          component={TreeEditPage}
        />
        <PrivateRoute exact path="/new-tree" component={TreeEditPage} />
        <PrivateRoute exact path="/target-view" component={TargetViewPage} />
        <PrivateRoute
          exact
          path="/saved-targets"
          component={SavedTargetsPage}
        />
      </IonRouterOutlet>
    </IonApp>
  );
};

export default App;
