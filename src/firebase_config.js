// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAELQTYBB3SPFkE086AZp6FTgYBYBDTdus",
  authDomain: "authentication-firebase-b16b0.firebaseapp.com",
  projectId: "authentication-firebase-b16b0",
  storageBucket: "authentication-firebase-b16b0.appspot.com",
  messagingSenderId: "571192610388",
  appId: "1:571192610388:web:508e872998d5d9cef427c1",
  measurementId: "G-N459QGRC7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);