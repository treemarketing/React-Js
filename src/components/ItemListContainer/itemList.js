import {Item} from "./item"
import Row from 'react-bootstrap/Row'






//defino products para mapear y exporto el listado
export const ItemList = ( {productos} ) => {
  


    return(
        //de esta forma exportamos como se va a ver el listado y es importante asignar la estructura que quieramos si agregamos categorias o alguna propiedad mas al producto
       <div className="item-list">   
        <div className="titulo">
        <h2>Elegí entre nuestros {productos.length} productos</h2>
        </div>
        {/* <button type="button" onClick={() =>  <Item key={ofertaFilter}/> } className="btn btn-outline-warning" >OFERTAS</button> */}

    <Row   className="container-fluid row-cols-auto g-4 justify-content-md-center">
        
    {productos.length ? (
     productos.map( (el) => <Item key={el.id} {...el} />) 
    ):<p>No hay productos en la tienda</p>}
    
    </Row> 
    
    </div> )
}
     