// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnJjDrug5SrKZEMtk4_uYasQBm-3CgF0U",
  authDomain: "time-tracker-app-f2a0e.firebaseapp.com",
  projectId: "time-tracker-app-f2a0e",
  storageBucket: "time-tracker-app-f2a0e.appspot.com",
  messagingSenderId: "876603894630",
  appId: "1:876603894630:web:33ca355d974fce0546b6a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;