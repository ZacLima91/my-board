// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACoWgLSwbK7oL54Ky2of-0Xq4BNa9gjAY",
  authDomain: "myboard-57bf6.firebaseapp.com",
  projectId: "myboard-57bf6",
  storageBucket: "myboard-57bf6.appspot.com",
  messagingSenderId: "548875275660",
  appId: "1:548875275660:web:f3d86d8eeb2838ba371aa9",
  measurementId: "G-RX5QM2PPKQ"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app()
}

const db = firebase.firestore();

export { db, firebase}