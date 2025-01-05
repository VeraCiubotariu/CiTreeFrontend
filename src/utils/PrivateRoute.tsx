import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../store/AuthProvider';

export interface PrivateRouteProps {
  component: any;
  path: string;
  exact?: boolean;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { authState } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (authState.loggedIn) {
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: '/home' }} />;
      }}
    />
  );
};
