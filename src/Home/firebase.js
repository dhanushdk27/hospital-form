// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig ={
    apiKey: "AIzaSyAe_3Cx6LiN_rCTn_zObDnf2lbLiMqWsyw",
    authDomain: "home-genie-b9d03.firebaseapp.com",
    projectId: "home-genie-b9d03",
    storageBucket: "home-genie-b9d03.appspot.com",
    messagingSenderId: "1023635215316",
    appId: "1:1023635215316:web:86de93694da6ab332bfc41",
    measurementId: "G-V9Q5B9KTFE"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const db = getFirestore();
export default db