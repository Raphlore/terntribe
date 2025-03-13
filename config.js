const firebase = require("firebase/app");
require("firebase/firestore");

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd9iCq2dP-ZLQAK52KPDHNZ_QW8E1WQq8",
  authDomain: "terntribe-90812.firebaseapp.com",
  projectId: "terntribe-90812",
  storageBucket: "terntribe-90812.appspot.com",
  messagingSenderId: "1063210767405",
  appId: "1:1063210767405:web:9969fae96ba1ccd55314a4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


module.exports = { db };
