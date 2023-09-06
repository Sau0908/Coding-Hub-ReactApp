// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBivzlwvt3D8BLuOEVYuxTATZldNC1TuoM",
  authDomain: "coding-hub-auth.firebaseapp.com",
  projectId: "coding-hub-auth",
  storageBucket: "coding-hub-auth.appspot.com",
  messagingSenderId: "96715287230",
  appId: "1:96715287230:web:81823b1f19d42217abccef",
  measurementId: "G-PW4FQTT2K9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth, provider };
