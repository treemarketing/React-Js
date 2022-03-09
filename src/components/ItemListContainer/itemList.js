import {Item} from "./item"
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'




//defino products para mapear y exporto el listado
export const ItemList = ( {productos} ) => {


    return(
        //de esta forma exportamos como se va a ver el listado y es importante asignar la estructura que quieramos si agregamos categorias o alguna propiedad mas al producto
       <div>   
      
        <h2>Elegí entre nuestros {productos.length} productos</h2>
        <Form.Check
    type="switch"
    id="disabled-custom-switch"
    label="Productos en Oferta"
  />

    <Row  md={3} className="g-4">
        
    {productos.length ? (
     productos.map( (el) => <Item key={el.id} {...el} />) 
    ):<p>No hay productos en la tienda</p>}
    </Row> 
    </div> )
}
     