import React from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState();
  const [loading, setLoading] = React.useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function sendemail() {
    const user = auth.currentUser;
    user.sendEmailVerification();
  }

  function signout() {
    return auth.signOut();
  }

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signout,
    sendemail,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
