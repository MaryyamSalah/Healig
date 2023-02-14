
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBlRfNCKa5BnGi5QJ7-f7atMIfI5ZSonGQ",
    authDomain: "healing-33d90.firebaseapp.com",
    projectId: "healing-33d90",
    storageBucket: "healing-33d90.appspot.com",
    messagingSenderId: "7136264899",
    appId: "1:7136264899:web:f0dcdd8e73df12eb571876"
  };

initializeApp(firebaseConfig);

const auth=firebase.auth();
const googleAuthProvider =firebase.googleAuthProvider();
const facebookAuthProvider=firebase.facebookAuthProvider();
export {auth,googleAuthProvider,facebookAuthProvider}