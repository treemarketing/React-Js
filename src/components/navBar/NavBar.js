import { Navbar,Nav,Container } from 'react-bootstrap';
import { CartWidget } from './CartWidget';
import {Link } from 'react-router-dom';
import logo from '../navBar/img/logo.jpg';
import './navBar.scss'
 

export const NavBarPrincipal = () => {

return (
<>
  <Navbar bg="dark" variant="dark">
    <Container>
      <img className='logo'src={logo}/>
      <Link to={'/'}>Hey Papas!</Link>
    <Navbar.Brand> <Link to={'/'}>Hey Papas!</Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Inicio</Nav.Link>
      <Nav.Link href="/productos">Productos</Nav.Link>
      <Nav.Link href="/contacto">Contacto</Nav.Link>
    </Nav>
    <CartWidget />
    </Container>
  </Navbar>
  <br />
  

</>
)
}