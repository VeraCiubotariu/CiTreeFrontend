import { createContext } from 'react';

export const LoginContext = createContext({
  loggedIn: false,
  username: '',
});

export const LoginProvider = ({ children }: { children: any }) => {
  const initialValue = { loggedIn: false, username: '' };

  return (
    <LoginContext.Provider value={initialValue}>
      {children}
    </LoginContext.Provider>
  );
};
