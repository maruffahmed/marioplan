import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

export const firebaseConfig = {
    apiKey: "AIzaSyAi4NGUv-Lwzwa-Sa_e01s0bLn4TTkdbgc",
    authDomain: "marioplan-accc9.firebaseapp.com",
    databaseURL: "https://marioplan-accc9.firebaseio.com",
    projectId: "marioplan-accc9",
    storageBucket: "marioplan-accc9.appspot.com",
    messagingSenderId: "111068548300",
    appId: "1:111068548300:web:74391c37629f45833c4669",
    measurementId: "G-E9T8YZ6YDE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;
