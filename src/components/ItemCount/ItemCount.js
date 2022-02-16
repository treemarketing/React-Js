import {useState } from "react";
import Button from 'react-bootstrap/Button'





export const ItemCount = ({max, min = 0}) => {

const [counter, setCounter] = useState(min)

const handleSumar = () => {
    counter < max && setCounter(counter + 1)
}

const handleRestar = () => {
   counter > min && setCounter(counter - 1)
}

    return(
<div className="contador">
<Button variant="light" onClick={handleRestar}>-</Button> 
<span className="mx-4">{counter}</span>
<Button variant="light" onClick={handleSumar}>+</Button> 

</div>


    )
}