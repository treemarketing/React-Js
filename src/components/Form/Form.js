import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Form'



export const Formulario = () => {

    const handleSubmit = () => {


    }

return(
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label >Email</Form.Label>
    <Form.Control size="lg" type="email" placeholder="Ingresas Email" />
    <Form.Text className="col-sm-10 text-muted">
      Ingrese su direccion de email
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Enviar
  </Button>
</Form>


)
}