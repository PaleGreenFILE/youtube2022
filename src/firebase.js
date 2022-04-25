// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDViRCKZvTtZcjv6PqDiznePARqVG9zJB8",
  authDomain: "angels-social.firebaseapp.com",
  projectId: "angels-social",
  storageBucket: "angels-social.appspot.com",
  messagingSenderId: "953113821647",
  appId: "1:953113821647:web:8347bc3e537eba6abfd2ba",
  measurementId: "G-C2GYXV0V0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);