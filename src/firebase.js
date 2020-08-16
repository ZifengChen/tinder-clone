import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-qJ8gnvUocu2xVT6nWrev32mFfcb7INc",
  authDomain: "tinder-clone-36.firebaseapp.com",
  databaseURL: "https://tinder-clone-36.firebaseio.com",
  projectId: "tinder-clone-36",
  storageBucket: "tinder-clone-36.appspot.com",
  messagingSenderId: "152811521460",
  appId: "1:152811521460:web:32b15a4ec721926ec29ee1",
  measurementId: "G-SQF5ZV5HJS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
