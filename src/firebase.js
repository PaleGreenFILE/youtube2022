// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBd1JQ32iplFr8nlVqqODWtSPfvpxJ2ds",
  authDomain: "angels-shopping.firebaseapp.com",
  projectId: "angels-shopping",
  storageBucket: "angels-shopping.appspot.com",
  messagingSenderId: "691007372009",
  appId: "1:691007372009:web:0a47ef74dc214f87060e78",
  measurementId: "G-S1WRNSTZV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);