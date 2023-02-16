import { useState, useEffect, createContext, useContext } from "react";
import { auth, db } from "../components/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  function signUp(email, pass) {
    createUserWithEmailAndPassword(auth, email, pass);
    setDoc(doc(db, "users", email), { savedShows: [] });
  }

  function logIn(email, pass) {
    return signInWithEmailAndPassword(auth, email, pass);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );
  }, []);

  return (
    <AuthContext.Provider value={{ logIn, logOut, signUp, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuthContext = () => useContext(AuthContext);
