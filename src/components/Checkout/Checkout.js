import { useContext } from "react"
import {CartContext} from "../context/CartContext"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Navigate} from 'react-router-dom'
import { useForm } from "../hooks/useForm"





const initialForm = {
  name: "",
  email: "",
  tel:"",
}

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if(!form.name.trim()){
      errors.name = "!El Campo nombre es requerido¡"
  }else if(!regexName.test(form.name.trim())){
      errors.name = "El campo nombre solo acepta letras"
  }
  if(!form.email.trim()){
      errors.email = "!El Campo e-mail es requerido¡"
  }else if(!regexEmail.test(form.email.trim())){
      errors.email = "El campo email es incorrecto"
  }
  if(!form.tel.trim()){
      errors.tel = "!El Campo teléfono es requerido¡"
  }
  
  return errors;
}



export const Checkout = () =>{
  
//probando validacion hook personalizado
  const {form, errors, loading, response, orderid, handleChange, handleBlur, handleSubmitCheckout} = useForm(initialForm, validationsForm )


    const {cart, vaciarCart} = useContext(CartContext)
    // const [values, setValues] = useState({
    //     nombre: "",
    //     email: "",
    //     tel:"",
    //   })

    //   const generarOrden = () => {
    //     const orden = {
    //       comprador: initialForm,
    //       items: cart,
    //       total: totalCart()
    //   }
    //     const ordenRef = collection(db, "orden")
    //     addDoc(ordenRef, orden)
    //     .then((doc) => {
    //       console.log(doc.id)
    //     })
    //   }

    //   const handleSubmitCheckout = (e) => {
    //     e.preventDefault();
    //     setErrors(validateForm(form))
    //     if(Object.keys(errors).length === 0) {
    //      alert("Enviando Formulario")   
    //      setLoading(true)
    //      generarOrden()
    //      .then((resp)=>{
    //      setLoading(false)
    //      setResponse(true)
    //      setForm(initalForm)
    //     setTimeout(() =>setResponse(false),5000)    
    //     })
    //     }else{
    //         return;
    //     }
    // };
      
    //   const handleInputChange = (e) => {
    //       setValues({
    //         ...values,
    //         [e.target.name]: e.target.value
    //       })
    //     }

    // const [validated, setValidated] = useState(false);
    
//     const handleSubmitCheckout = (e) => {
//       const form = e.currentTarget;
//       console.log(form.checkValidity())
//       if (form.checkValidity() === false) {
//     e.preventDefault();
//     e.stopPropagation();
//   }else{
    
//     setValidated(true);
//     generarOrden()
  
//   }
// }


// const generarOrden = () => {
//       const orden = {
//         comprador: form,
//         items: cart,
//         total: totalCart()

//     }
//     console.log(orden)
//       const ordenRef = collection(db, "orden")
//       addDoc(ordenRef, orden)
//       .then((doc) => {
//         console.log(doc.id)
//       })
//     }

 

//     console.log(handleSubmitCheckout)
if (cart.length === 0){
  return <Navigate to="/"/>
}


if (orderid){
return <div className="mb-2"><h2>su id de compra es {orderid} </h2> <Button variant="primary" size="lg" onClick={vaciarCart}>
Regresar</Button></div>
} 





return(
    <div className="container my-5">
        <h2>Checkout</h2>
        <hr/>

        <Form onSubmit={handleSubmitCheckout}>
<Form.Group  className="mb-3" controlId="formBasicName"  >
    <Form.Label >nombre</Form.Label>
    <Form.Control size="lg" type="text" placeholder="Ingre su nombre" defaultValue={form.name} required onBlur={handleBlur} onChange={handleChange} name="name"/>
    {errors.name&&<p>{errors.name}</p>}
    <Form.Text className="col-sm-10">
     
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label >Email</Form.Label>
    <Form.Control required size="lg" type="email" placeholder="Ingresas Email" defaultValue={form.email} onBlur={handleBlur} onChange={handleChange} name="email"/>
    {errors.name&&<p>{errors.email}</p>}
    <Form.Text className="col-sm-10">
      
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formaBasicNumber">
    <Form.Label>Teléfono</Form.Label>
    <Form.Control required type="number" placeholder="Telefono" defaultValue={form.tel} onBlur={handleBlur} onChange={handleChange} name="tel"/>
  </Form.Group>
  {errors.name&&<p>{errors.tel}</p>}
  <Button variant="warning" type="submit" >
    Enviar
  </Button>
</Form>


            {
                loading && <div className="d-flex justify-content-center">
                    <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Cargando...</span>
                    </div>
                    </div>
            } 
            <span></span>
            {response && <h2>Su compra ha sido procesada </h2> }
            
    </div>

    )
}