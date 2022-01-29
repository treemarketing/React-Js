import { Navbar,Nav,Container } from 'react-bootstrap';

export const NavBarPrincipal = () => {

return (
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Clase 2 - Menu</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#features">Productos</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
</>
)
}