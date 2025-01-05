import React, { createContext, useReducer } from 'react';
import { User } from '../model/user-types';
import { login as loginApi, signup as signupApi } from '../api/auth-service';

type LoginFn = (username?: string, password?: string) => Promise<void>;
type LogoutFn = () => void;
type SignupFn = (user: User) => Promise<void>;

type AuthState = {
  loggedIn: boolean;
  user: User | null;
};

enum AUTH_ACTION {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  LOGOUT = 'LOGOUT',
}

type AuthAction =
  | { type: AUTH_ACTION.LOGIN; payload: User }
  | { type: AUTH_ACTION.SIGNUP; payload: User }
  | { type: AUTH_ACTION.LOGOUT };

export const AuthContext = createContext<{
  authState: AuthState;
  login: LoginFn;
  signup: SignupFn;
  logout: LogoutFn;
}>({
  authState: { loggedIn: false, user: null },
  login: async () => {},
  signup: async () => {},
  logout: () => {},
});

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AUTH_ACTION.LOGIN:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };
    case AUTH_ACTION.SIGNUP:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };
    case AUTH_ACTION.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const initialValue: AuthState = {
    loggedIn: false,
    user: null,
  };

  const [authState, dispatch] = useReducer(authReducer, initialValue);

  const login: LoginFn = async (username, password) => {
    try {
      const user = await loginApi(username!, password!); // Call login API
      dispatch({ type: AUTH_ACTION.LOGIN, payload: user });
    } catch (error: any) {
      console.error('Login failed:', error.message);
      throw error;
    }
  };

  const signup: SignupFn = async (user) => {
    try {
      const newUser = await signupApi(user); // Call signup API
      dispatch({ type: AUTH_ACTION.SIGNUP, payload: newUser });
    } catch (error: any) {
      console.error('Signup failed:', error.message);
      throw error;
    }
  };

  const logout: LogoutFn = () => {
    dispatch({ type: AUTH_ACTION.LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ authState, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
