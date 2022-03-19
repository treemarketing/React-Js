// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {  useState, useEffect } from "react"
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
const appAuth = initializeApp(firebaseConfig);


const auth = getAuth(appAuth)



//probando un hook de estado 
export function useAuth() {
  const [usuario, setUsuario] = useState()


  useEffect(() => {
    const change = onAuthStateChanged(auth,(usuarioFirebase) => {
      setUsuario(usuarioFirebase)
    }
  )
  return change
}, [])

  return usuario
}

export default appAuth;