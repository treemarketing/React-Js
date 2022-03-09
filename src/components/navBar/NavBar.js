import { Navbar,Nav,Container,NavDropdown } from 'react-bootstrap';
import { CartWidget } from './CartWidget/CartWidget';
import {Link } from 'react-router-dom';
import logo from '../navBar/img/logo.jpg';
import './navBar.scss'
 

export const NavBarPrincipal = () => {

return (
<>
  <Navbar className="navBar" variant="dark">
    <Container>
    <Link to='/'><img className='logo'src={logo} alt="logo"/></Link>
    <Navbar.Brand> <Link to={'/'}>Hey Papas!</Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Inicio</Nav.Link>
      <Nav.Link href="/contacto">Contacto</Nav.Link>
      <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="/productos">Todos</NavDropdown.Item>
          <NavDropdown.Item href='/productos/pollo'>Pollo</NavDropdown.Item>
          <NavDropdown.Item href='/productos/papas'>Papas Fritas</NavDropdown.Item>
          <NavDropdown.Item href='/productos/empanadas'>Empanadas</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='/productos/combos'>Combos</NavDropdown.Item>
          <NavDropdown.Item href='/oferta/'>Oferta</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/productos2">prueba productos</Nav.Link>
    </Nav>
    <CartWidget />
    </Container>
  </Navbar>
  <br />
  

</>
)
}