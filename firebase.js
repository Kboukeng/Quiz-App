// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1lCROzCEcU0JSkays7kBQV62UXAs4-XA",
  authDomain: "quiz-fab65.firebaseapp.com",
  projectId: "quiz-fab65",
  storageBucket: "quiz-fab65.appspot.com",
  messagingSenderId: "221586158847",
  appId: "1:221586158847:web:89a4fecf927b6a745608ca",
  measurementId: "G-10196D14T6",
};

// Initialize Firebase
if (!firebase.app / length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase};