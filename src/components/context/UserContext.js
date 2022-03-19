import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { createContext, useState, useEffect, useContext } from "react"
import appAuth from "../firebase/configAuth"





 const AuthContext = createContext()
 // const auth = getAuth(appAuth)
 //Para no repetir lo mismo en cada uno que utilice
 export const useAuth = () => useContext(AuthContext)
 const auth = getAuth(appAuth)
 
 

 
 //provider
 export const AuthProvider = ({children}) => {
   const [usuario, setUsuario] = useState(null)
   
   const data = {usuario }
  //  useEffect(() => {
  //    onAuthStateChanged(auth,(usuarioFirebase) => {
  //      if(usuarioFirebase){
  //        setUsuario(usuarioFirebase)
  //       }else{
  //         setUsuario(null)
  //       }
  //     })
  //   }, [])
    
    
    // const signUp = (correo, contraseña) => {
      //     return createUserWithEmailAndPassword(auth, correo, contraseña)
      // }
    // const login = () => {
      //     return signInWithEmailAndPassword(auth)
      // }
      // const logout = () => {
        //     return signOut()
        // }
        
        onAuthStateChanged(auth,(usuarioFirebase) => {
          if(usuarioFirebase){
            setUsuario(usuarioFirebase)
          }else{
            setUsuario(null)
          }
        })
      
        
        return (
          <AuthContext.Provider value={{ data}}>
            {children}
        </AuthContext.Provider>
    )
  }
  
 
  export default AuthContext