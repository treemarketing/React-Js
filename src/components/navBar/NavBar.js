import { NavDropdown } from 'react-bootstrap';
import { CartWidget } from './CartWidget/CartWidget';
import {Link, NavLink } from 'react-router-dom';
import logo from '../navBar/img/logo.jpg';
import './navBar.scss'
 

export const NavBarPrincipal = () => {

return (
<>
  {/* <Navbar className="navBar">
    <Container >
    <Link to='/'><img className='logo'src={logo} alt="logo"/></Link>
    <Navbar.Brand> <Link to='/'>Hey Papas!</Link></Navbar.Brand>
    <Nav className="me-auto navBarDown">
       <NavLink exact to="/" ClassName="active">Inicio</NavLink></Nav.Link>
        <NavLink exact to="/contacto" ClassName="active">Contacto</NavLink>
      <NavDropdown   title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item> <Link to="/productos">Todos</Link></NavDropdown.Item>
          <NavDropdown.Item><Link  to='/productos/pollo'>Pollo</Link></NavDropdown.Item>
          <NavDropdown.Item> <Link  to='/productos/papas'>Papas Fritas</Link></NavDropdown.Item>
          <NavDropdown.Item><Link  to='/productos/empanadas'>Empanadas</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item> <Link  to='/productos/combos'>Combos</Link></NavDropdown.Item>
        </NavDropdown>
        <CartWidget />
    </Nav>
    
    </Container>
  </Navbar>
  <br /> */}
 <header>
 <nav className="nav">
                 <Link to='/'><img className='logo'src={logo} alt="logo"/></Link>
                 <ul className="navMenu">
                    <li className="activo"><NavLink to="/" className="active">Inicio</NavLink></li>
                    <li><NavLink  to="/contacto" className="active">Contacto</NavLink></li>
                    <li><NavLink  to="/ordenes" className="active">Ordenes</NavLink></li>
                    <NavDropdown   title="Productos" id="basic-nav-dropdown">
         <NavDropdown.Item> <Link to="/productos">Todos</Link></NavDropdown.Item>
          <NavDropdown.Item><Link  to='/productos/pollo'>Pollo</Link></NavDropdown.Item>
          <NavDropdown.Item> <Link  to='/productos/papas'>Papas Fritas</Link></NavDropdown.Item>
          <NavDropdown.Item><Link  to='/productos/empanadas'>Empanadas</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item> <Link  to='/productos/combos'>Combos</Link></NavDropdown.Item>
        </NavDropdown>
        <CartWidget />
                </ul>
              
            
        </nav>
        </header>
</>
)
}