import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCVqlDgc2aN-ob5C6gMFILbXIAUZSpjRwg",
  authDomain: "netflix-clone-f62c3.firebaseapp.com",
  projectId: "netflix-clone-f62c3",
  storageBucket: "netflix-clone-f62c3.appspot.com",
  messagingSenderId: "655701812399",
  appId: "1:655701812399:web:0ebddb13eba046c60be05a",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
