// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5UhBgwm_qSnpRkMZd58velnYOBbTo8gc",
  authDomain: "fir-96fef.firebaseapp.com",
  projectId: "fir-96fef",
  storageBucket: "fir-96fef.appspot.com",
  messagingSenderId: "292395481717",
  appId: "1:292395481717:web:d1caa41434c6dd718c163c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)