import { initializeApp } from "firebase/app";
//import firebase from 'firebase/compat/app';
import 'firebase/auth'
import { getAuth, GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBlRfNCKa5BnGi5QJ7-f7atMIfI5ZSonGQ",
    authDomain: "healing-33d90.firebaseapp.com",
    projectId: "healing-33d90",
    storageBucket: "healing-33d90.appspot.com",
    messagingSenderId: "7136264899",
    appId: "1:7136264899:web:f0dcdd8e73df12eb571876"
  };


  
 
// Initialize Firebase
const app =initializeApp(firebaseConfig);

const auth= getAuth(app);
const googleAuthProvider =new GoogleAuthProvider();
const facebookAuthProvider=new FacebookAuthProvider();
export {auth,googleAuthProvider,facebookAuthProvider}