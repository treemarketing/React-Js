import {useState} from 'react'
import { helpHttp } from '../helpers/helpHttp';
import { useContext} from "react"
import {CartContext} from "../context/CartContext"
import { db } from '../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { Link, Navigate } from 'react-router-dom';














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
const {cart, totalCart, vaciarCart} = useContext(CartContext)
const generarOrden = () => {
    const orden = {
      comprador: form,
      items: cart,
      total: totalCart(),
      fyh: Timestamp.fromDate(new Date()),
  }

 
    const ordenRef = collection(db, "orden")
    addDoc(ordenRef, orden)
    .then((doc) => {
      setOrderid(doc.id)
    
    })
    .catch((err) => {
        console.log(err)
    })
    
}


      

      const handleSubmitCheckout = (e) => {
        e.preventDefault();
        setErrors(validateForm(form))
        if(Object.keys(errors).length === 0) {
         alert("Enviando Formulario") 
         setLoading(true)
         generarOrden()
         
        
         setLoading(false)
         setResponse(true)
         setForm(initalForm)
        setTimeout(() =>setResponse(false),8000)    
        
        }else{
            return;
        }
    };



  return {
    form,errors,loading,response,orderid,handleChange,handleBlur,handleSubmit,handleSubmitCheckout};
}
