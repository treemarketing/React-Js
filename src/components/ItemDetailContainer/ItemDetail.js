import {ItemCount } from "../ItemCount/ItemCount";
import {useState} from 'react';
import Button from 'react-bootstrap/Button'





//doy formato al item individual
export const ItemDetail = ({id, nombre, desc, precio, imgRoute, stock, categoria}) => {


    const [cantidad, setCantidad] = useState(0)
    // const [cart, setCart] = useState([])  
    // const [products, setProducts] = useState([])

    
    const handleAgregar = () => {
        if (cantidad === 0) return
        const addItem =  {id, precio, nombre, stock, cantidad}
        console.log(addItem)
    }
  
    
    // const agregarAlCarrito = (id) => {
    //     const newCart = [...cart]
    //     const product = products.find(prod => prod.id === id);
    //     setCart([
    //       ...newCart,
    //       product
    //     ])  
    //   };




    return( 
        <>
        
        <h2>{nombre}</h2>
        <div className="itemDetail">
        <img src={imgRoute} alt={desc}/>
        </div>
        <div>
        <p>{desc}</p>
        <ItemCount max={stock} counter={cantidad} setCounter={setCantidad} handleAgregar={handleAgregar} />
        <h2>Precio:$ {precio}</h2>
        <Button variant="danger" onClick={handleAgregar}>Agregar al carrito</Button>
        </div> 
        </>
    )
    }   
    //se puede configurar en ItemCount el max y el minimo tambien.