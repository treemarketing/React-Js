import { Navbar,Nav,Container,NavDropdown } from 'react-bootstrap';
import { CartWidget } from './CartWidget';
import {Link } from 'react-router-dom';
import logo from '../navBar/img/logo.jpg';
import './navBar.scss'
 

export const NavBarPrincipal = () => {

return (
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Link to='/'><img className='logo'src={logo}/></Link>
    <Navbar.Brand> <Link to={'/'}>Hey Papas!</Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Inicio</Nav.Link>
      <Nav.Link href="/contacto">Contacto</Nav.Link>
      <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="/productos">Todos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Pollo</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Papas Fritas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Empanadas</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Combos</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    <CartWidget />
    </Container>
  </Navbar>
  <br />
  

</>
)
}