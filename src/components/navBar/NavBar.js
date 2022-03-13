import { Navbar,Nav,Container,NavDropdown } from 'react-bootstrap';
import { CartWidget } from './CartWidget/CartWidget';
import {Link, NavLink } from 'react-router-dom';
import logo from '../navBar/img/logo.jpg';
import './navBar.scss'
 

export const NavBarPrincipal = () => {

return (
<>
  <Navbar className="navBar" variant="dark">
    <Container >
    <Link to='/'><img className='logo'src={logo} alt="logo"/></Link>
    <Navbar.Brand> <Link to={'/'}>Hey Papas!</Link></Navbar.Brand>
    <Nav className="me-auto navBarDown">
      <Nav.Link> <NavLink exact to="/" activeClassName="active">Inicio</NavLink></Nav.Link>
      <Nav.Link>  <NavLink exact to="/contacto" activeClassName="active">Contacto</NavLink></Nav.Link>
      <NavDropdown   title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item> <Link to="/productos">Todos</Link></NavDropdown.Item>
          <NavDropdown.Item><Link  to='/productos/pollo'>Pollo</Link></NavDropdown.Item>
          <NavDropdown.Item> <Link  to='/productos/papas'>Papas Fritas</Link></NavDropdown.Item>
          <NavDropdown.Item><Link  to='/productos/empanadas'>Empanadas</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item> <Link  to='/productos/combos'>Combos</Link></NavDropdown.Item>
        </NavDropdown>
    </Nav>
    <CartWidget />
    </Container>
  </Navbar>
  <br />
  

</>
)
}