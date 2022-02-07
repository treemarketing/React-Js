import {Item} from "./item"
import Row from 'react-bootstrap/Row'



//defino products para mapear y exporto el listado
export const ItemList = ( {products} ) => {


    return(
            //forma simple de utilizar la exportacion del item y darle el formato. 
    <Row xs={1} md={2} className="g-4">
    {products.length ? (
     products.map( (product) => <Item key={product.id} nombre={product.nombre} precio={product.precio} desc={product.desc} imgRoute={product.imgRoute} />   
    ) 
    ):<p>No hay productos en la tienda</p>}
    </Row> 
    )
}