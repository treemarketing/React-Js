import {Item} from "./item"
import Row from 'react-bootstrap/Row'



//defino products para mapear y exporto el listado
export const ItemList = ( {productos} ) => {


    return(
            //de esta forma exportamos como se va a ver el listado y es importante asignar la estructura que quieramos si agregamos categorias o alguna propiedad mas al producto
    <Row xs={1} md={2} className="g-4">
    {productos.length ? (
     productos.map( (el) => <Item key={el.id} {...el} />) 
    ):<p>No hay productos en la tienda</p>}
    </Row> 
    )
}