import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect, getAuth } from 'firebase/auth'
import React, {useState} from 'react'
import { Button, Container, Form, Stack } from 'react-bootstrap'
import appAuth, { useAuth } from '../firebase/configAuth'
















  

const auth = getAuth(appAuth)


export const Logueo = () => {
  

  const googleAuth = new GoogleAuthProvider();

const usuario = useAuth()
const [registro, setRegistro] = useState(false)


// onAuthStateChanged(auth,(usuarioFirebase) => {
//   if(usuarioFirebase){
//     setUsuarioGlobal(usuarioFirebase)
//   }else{
//     setUsuarioGlobal(null)
//   }
// })




const submitHandler = async (e)=>{
    e.preventDefault()
    //se puede hacer de esta forma o usando un estado para cada uno
    const correo = e.target.formBasicEmail.value
    const contraseña = e.target.formBasicPassword.value
    //si se registra
    // try {
    //   await login(auth, correo, contraseña)
    // } catch (error) {
    //   setError("error en credenciales")
    //   setTimeout(() =>setError(""), 2000)
      
    // }

    //otra forma
    if(registro){
      await createUserWithEmailAndPassword(auth, correo, contraseña)
      
    }else{
      //si esta iniciando sesion
      await signInWithEmailAndPassword(auth, correo, contraseña)
  // }
  // }
    
    // try{
    //   setRegistro(true)
    //   await createUserWithEmailAndPassword(auth, correo, contraseña)
    //   }catch{
    //     alert("Error")
    //   }
    //   setRegistro(false)
  
  }
     
}
  
  




  return (
    
    <Container>
      <Form.Label>Estas logueado como:{usuario?.email} </Form.Label>
    <Stack gap={3}>  
    <Form onSubmit={submitHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" required/>
      <Form.Text className="text">
        Pone un email valido con @
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" required/>
      <Form.Text className="text">
        Contraseña con más de 6 caracteres
      </Form.Text>
    </Form.Group>
    <Button variant="dark" type="submit">
      {registro ? "Regístrate" : "iniciar Sesión"}
    </Button>
    <Button variant="warning" type="submit" onClick={() => signInWithRedirect(auth, googleAuth)}>
      Acceder con google
    </Button>
    <Button variant="dark" onClick={() => setRegistro(!registro)}>
      {registro ? "Ya tienes cuenta? Inicia Sesión": "No tienes cuenta? Registrate"}
    </Button>
   
  </Form>
  
  </Stack>  
  </Container>
  

  
  )
}




