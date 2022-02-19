import {useState } from "react";
import Button from 'react-bootstrap/Button'





export const ItemCount = ({max, min = 0, counter, setCounter}) => {



const handleSumar = () => {
    counter < max && setCounter(counter + 1)
}

const handleRestar = () => {
   counter > min && setCounter(counter - 1)
}
//se cambia de color segun esta en 0 
    return(
<div className="contador">
<Button  variant={counter === min ? "dark" : "light"} onClick={handleRestar}>-</Button> 
<span className="mx-4">{counter}</span>
<Button variant="light" onClick={handleSumar}>+</Button> 


</div>


    )
}