import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC02j-mbaQd9wvwkH9NgKzp9jGjHURYYfo",
    authDomain: "react-gallery-app-5ce9c.firebaseapp.com",
    databaseURL: "https://react-gallery-app-5ce9c.firebaseio.com",
    projectId: "react-gallery-app-5ce9c",
    storageBucket: "react-gallery-app-5ce9c.appspot.com",
    messagingSenderId: "464570972893",
    appId: "1:464570972893:web:22fe762d5bab5e73947934"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
