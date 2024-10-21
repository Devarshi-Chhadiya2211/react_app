// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmnxI_94-9ZgUJ6JCu3V22OVUAOM6ouKc",
  authDomain: "login-signup-7bb9e.firebaseapp.com",
  projectId: "login-signup-7bb9e",
  storageBucket: "login-signup-7bb9e.appspot.com",
  messagingSenderId: "639976854841",
  appId: "1:639976854841:web:e8d88e8e401fddf0bb04e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)