import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCHNsNzTu_BXn6qqvQ5eadg7ZRmQHdeC3g",
    authDomain: "tinder-clone-a4ee8.firebaseapp.com",
    projectId: "tinder-clone-a4ee8",
    storageBucket: "tinder-clone-a4ee8.appspot.com",
    messagingSenderId: "788352286724",
    appId: "1:788352286724:web:b09106ec62c3632e33b551",
    measurementId: "G-PQFTZWMQ2F",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  
  export default db;
  