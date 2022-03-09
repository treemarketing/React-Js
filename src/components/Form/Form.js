import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Form'
import { useState } from "react";





const initialForm = {
  name: "",
  email: "",
  tel:"",
}
const validationsForm = () => {
  // let errors = {};

  // if (!form.name.trim()){
  //   errors.name = "El campo nombre es requerido";
  // }return errors;
  
}


 const CForm = () => {

//   const [values, setValues] = useState({
//     nombre: "",
//     email: ""
//   })

//     const handleSubmit = (e) => {
// e.preventDefault();
// console.log("submit")
// console.log(values)






// }
// const handleInputChange = (e) => {
//   setValues({
//     ...values,
//     [e.target.name]: e.target.value
//   })




return(
// {/* <Form >
// <Form.Group className="mb-3" controlId="formBasicName"  >
//     <Form.Label >nombre</Form.Label>
//     <Form.Control size="lg" type="text" placeholder="Ingre su nombre" defaultValue={values.nombre} onChange={handleInputChange} name="nombre"/>
//     <Form.Text className="col-sm-10 text-muted">
//       Ingrese su nombre
//     </Form.Text>
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label >Email</Form.Label>
//     <Form.Control size="lg" type="email" placeholder="Ingresas Email" defaultValue={values.email} onChange={handleInputChange} name="email"/>
//     <Form.Text className="col-sm-10 text-muted">
//       Ingrese su direccion de email
//     </Form.Text>
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Contraseña</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>
//   <Button variant="primary" type="submit" onClick={handleSubmit} >
//     Enviar
//   </Button>
// </Form> */}

<div>
<h2> Formulario de Contacto</h2>
<form onSubmit={handleSubmit}>
<input type="text" name="name" placeholder="Escribe tu nombre" onBlur={handleBlur} onChange={handleChange} value={form.name} required />
{errors.name && <p>{errors.name}</p>}

</form>
</div>
)
}

export default Form;