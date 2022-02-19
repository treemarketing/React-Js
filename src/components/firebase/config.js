// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOgLnKXhIfsKEyjvKBTWaLVDsqGsP1-IU",
  authDomain: "rj-coder.firebaseapp.com",
  projectId: "rj-coder",
  storageBucket: "rj-coder.appspot.com",
  messagingSenderId: "266170193050",
  appId: "1:266170193050:web:39642e690a34b603a03b23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)