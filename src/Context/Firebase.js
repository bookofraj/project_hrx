import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, GoogleAuthProvider, 
    onAuthStateChanged,signOut, signInWithPopup
} from "firebase/auth";
import { useState, useContext, useEffect, createContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDrT9bm0ECdk5W89yPKSZJWq3vIv4VJu9o",
  authDomain: "project-hrx-auth.firebaseapp.com",
  projectId: "project-hrx-auth",
  storageBucket: "project-hrx-auth.appspot.com",
  messagingSenderId: "531730495580",
  appId: "1:531730495580:web:32ba76a12d7688211d0e99"
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);

// ***********************|custom hook|********************************

export const FirebaseProvider = (props) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
        if (user) setUser(user);
        else setUser(null);
        // console.log(user);
    });
}, []);

  const signupWithEnP = (email,password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  }
  const signinWithEnP = (email,password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  }
  const signinWithGoogle = () => {
    signInWithPopup(firebaseAuth,googleProvider).then((result)=>{
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const googleUser = result.user;
    }).catch((error)=>{
      console.log(error);
    });
  }
  const logoutUser = () => {
    signOut(firebaseAuth).then((result)=>{
      setUser(null);
    }).catch((error)=>{
      console.log(error);
    });
  }

  return (
    <FirebaseContext.Provider value={{
      signinWithGoogle,
      signupWithEnP,
      signinWithEnP,
      logoutUser
    }}>
      {props.children}
    </FirebaseContext.Provider>
  )

}