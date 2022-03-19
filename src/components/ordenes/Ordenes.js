import { getAuth, signOut } from 'firebase/auth'
import {useState} from 'react'
import { Button, Container } from 'react-bootstrap'
import appAuth, { useAuth } from '../firebase/configAuth'
import { Logueo } from '../usuario/Logueo'




const auth = getAuth(appAuth)



export const Ordenes = () => {
  const [error, setError] = useState("")
  const usuario = useAuth()

  const handleLogout = async () => {
    try{
      await signOut(auth)
    }catch(error){
      setError("error servidor")
    }
  }

  return (
     <div>{usuario? <Container>
      {error && <p>{error}</p>}
    <div>Mira las ordenes - Sesión Iniciada {usuario?.email}</div>
    Bienvenido 
    <Button onClick={handleLogout}>Cerrar Sesion</Button>
    </Container> : <Logueo/>} </div>
  )
}
