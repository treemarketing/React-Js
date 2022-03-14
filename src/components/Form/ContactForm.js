import React from 'react'
import { useForm } from '../hooks/useForm'
import "./contacto.scss"



const initialForm = {
    name:"",
    email:"",
    tel:"",
    comments:"",
}

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

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
    if(!form.comments.trim()){
        errors.comments = "!El Campo comentarios es requerido¡"
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments = "El campo comentarios no debe exceder los 255 caracteres"
    }
    return errors;
}



const ContactForm = () => {
    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationsForm );


  return (
    <div ><h2>FORMULARIO DE CONTACTO</h2>
    
    <form className="contact-form" onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder="Escribe tu nombre" onBlur={handleBlur} onChange={handleChange} value={form.name} required />
    {errors.name&&<p>{errors.name}</p>}
    <input type="email" name="email" placeholder="Escribe tu email" onBlur={handleBlur} onChange={handleChange} value={form.email} required />
    {errors.name&&<p>{errors.email}</p>}
    <input type="number" name="tel" placeholder="Escribe tu teléfono" onBlur={handleBlur} onChange={handleChange} value={form.tel} required />
    {errors.name&&<p>{errors.tel}</p>}
    <textarea cols="50" rows="5" name="comments" placeholder="Escribe tus comentarios" onBlur={handleBlur} onChange={handleChange} value={form.comments} required />
    {errors.name&&<p>{errors.comments}</p>}
    <input type="submit" className="submit" value="enviar"/>

    </form>
            {
                loading && <div className="d-flex justify-content-center">
                    <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Cargando...</span>
                    </div>
                    </div>
            } 
            {response && <h2>El formulario ha sido enviado correctamente</h2>}
    </div>
  )
}


export default ContactForm