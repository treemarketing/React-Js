import {useState} from 'react'
import { helpHttp } from '../helpers/helpHttp';
import { useContext} from "react"
import {CartContext} from "../context/CartContext"
import { generarOrden } from '../firebase/generarOrden';












export const useForm = (initalForm, validateForm) => {
    const [form, setForm] = useState(initalForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);    
    const [orderid, setOrderid] = useState(null);    

const handleChange = (e) => {
setForm({
    ...form,
    [e.target.name]:e.target.value
})
};
const handleBlur = (e) => {
    handleChange(e)
    setErrors(validateForm(form))
};



const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form))
    if(Object.keys(errors).length === 0) {
     alert("Enviando Formulario")   
     setLoading(true)
     helpHttp()
     .post("https://formsubmit.co/ajax/treemarketingonline@gmail.com",{
        body:form,
        headers:{
            "Content-Type": "application/json",
            Accept:"application/json",
        }
    })
     .then((resp)=>{
     setLoading(false)
     setResponse(true)
     setForm(initalForm)
    setTimeout(() =>setResponse(false),8000)    
    })
    }else{
        return;
    }
};
const {cart, totalCart} = useContext(CartContext)




        //hago otro handle submit para actualizar la base de datos de firebase
  
        const handleSubmitCheckout = (e) => {
            e.preventDefault();
            setErrors(validateForm(form))
            if(Object.keys(errors).length === 0) {
             alert("Enviando Formulario") 
             setLoading(true)
             //se simplifico la funcion 
             generarOrden(form, cart, totalCart, setOrderid)
             
            
             setLoading(false)
             setResponse(true)
             setForm(initalForm)
            setTimeout(() =>setResponse(false),8000)    
            
            }else{
                return;
            }
    return (
      <div>generarOrden</div>
    )
  }

  return {
    form,errors,loading,response,orderid,handleChange,handleBlur,handleSubmit, handleSubmitCheckout};
}



//COMO ACTUALIZAR PRODUCTO Y GENERAR ORDEN 

// addDoc(ordenRef, orden)
// .then((res) => {
//     //hago que cada uno de los productos del carrito sean actualizados en la base de datos con su nuevo stock
//     cart.forEach((item) => {
//         const docRef = doc(db, "productos", item.id)
//         getDoc(docRef)
//         .then((dbDoc) => {
//             if(dbDoc.data().stock >= item.cantidad){
//             updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
//         }else { alert("No queda stock de la cantidad elegida")}
//         //de todas formas el contador no permite que se agreguen mas del stock
//         })
//     })



//   setOrderid(res.id)

// })
// .catch((err) => {
//     console.log(err)
// })
