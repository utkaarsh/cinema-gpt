// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9GEYvm27ddUu-PNs8NgtspttHCzNuAZo",
  authDomain: "cinema-gpt.firebaseapp.com",
  projectId: "cinema-gpt",
  storageBucket: "cinema-gpt.appspot.com",
  messagingSenderId: "695287215026",
  appId: "1:695287215026:web:65d23a5b1cf6c2caf62aab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth setup
export const auth = getAuth();
