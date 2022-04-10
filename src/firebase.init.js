// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj7zMf4VN2o5JlIpsFU_JSaUqU3A5bEhk",
  authDomain: "ema-john-simple-1f477.firebaseapp.com",
  projectId: "ema-john-simple-1f477",
  storageBucket: "ema-john-simple-1f477.appspot.com",
  messagingSenderId: "1047825794270",
  appId: "1:1047825794270:web:2b64532c5c96d63184ee4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);
export default auth;