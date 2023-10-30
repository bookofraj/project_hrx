// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrT9bm0ECdk5W89yPKSZJWq3vIv4VJu9o",
  authDomain: "project-hrx-auth.firebaseapp.com",
  projectId: "project-hrx-auth",
  storageBucket: "project-hrx-auth.appspot.com",
  messagingSenderId: "531730495580",
  appId: "1:531730495580:web:32ba76a12d7688211d0e99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);