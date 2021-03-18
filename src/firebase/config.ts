
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAB6AKnEzlCTLPW-wxi66D6e5xi1vs6S-4",
    authDomain: "scl-demos.firebaseapp.com",
    projectId: "scl-demos",
    storageBucket: "scl-demos.appspot.com",
    messagingSenderId: "992038146337",
    appId: "1:992038146337:web:5a8a3d5c66b43d781dee60",
    measurementId: "G-Q8RTEJ19Y5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();
  