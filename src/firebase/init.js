// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR2yGeLktpLsuWpg-Xotr6cciKr36RfiY",
  authDomain: "fir-practise-e5412.firebaseapp.com",
  projectId: "fir-practise-e5412",
  storageBucket: "fir-practise-e5412.appspot.com",
  messagingSenderId: "453067534573",
  appId: "1:453067534573:web:6374602b92481031925ce4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();