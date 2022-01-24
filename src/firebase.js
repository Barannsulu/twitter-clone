import firebase from "firebase";
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyB6Ej4BnghMmtSfqXOK7xllmhUV8LKA1oY",
  authDomain: "twirrer-clone.firebaseapp.com",
  projectId: "twirrer-clone",
  storageBucket: "twirrer-clone.appspot.com",
  messagingSenderId: "180396115527",
  appId: "1:180396115527:web:7515dbcda35baa290d1362",
  measurementId: "G-XDNZ24JG9M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db; 