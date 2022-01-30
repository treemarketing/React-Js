import { Navbar,Nav,Container } from 'react-bootstrap';
import { CartWidget } from './CartWidget';


export const NavBarPrincipal = () => {

return (
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Hey Papas!</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#features">Productos</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    <CartWidget />
    </Container>
  </Navbar>
  <br />
  

</>
)
}