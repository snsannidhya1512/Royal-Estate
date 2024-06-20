// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-dcadc.firebaseapp.com",
  projectId: "real-estate-dcadc",
  storageBucket: "real-estate-dcadc.appspot.com",
  messagingSenderId: "59020570580",
  appId: "1:59020570580:web:6ad0aad9d3034547947041",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
