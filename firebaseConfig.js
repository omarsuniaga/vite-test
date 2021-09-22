// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeuLu0NjTq9BQHpWsct-wTeVorw-Kj284",
  authDomain: "apptividades-5b66f.firebaseapp.com",
  databaseURL: "https://apptividades-5b66f-default-rtdb.firebaseio.com",
  projectId: "apptividades-5b66f",
  storageBucket: "apptividades-5b66f.appspot.com",
  messagingSenderId: "92553077594",
  appId: "1:92553077594:web:aedbc59c7dbff37ed00963",

  // apiKey: process.env.VUE_APP_APIKEY,
  // authDomain: process.env.VUE_APP_AUTHDOMAIN,
  // databaseURL: process.env.VUE_APP_DATABASEURL,
  // projectId: process.env.VUE_APP_PROJECTID,
  // storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  // appId: process.env.VUE_APP_APPID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
