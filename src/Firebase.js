import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEPY3bjE9idoEN-4rm53lq_l1pTdjLul0",
  authDomain: "rpk2-96305.firebaseapp.com",
  projectId: "rpk2-96305",
  storageBucket: "rpk2-96305.appspot.com",
  messagingSenderId: "780321671493",
  appId: "1:780321671493:web:6d60d66d26278d04b9962c"
};

// Initialize Firebase
export const app=firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();  
export const db = app.firestore();
export const logout = () => {
  auth.signOut();
};