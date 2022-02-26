import {ItemCount } from "../ItemCount/ItemCount";
import {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button'
import { CartContext } from "../context/CartContext";
import {Link} from "react-router-dom"





//doy formato al item individual
export const ItemDetail = ({id, nombre, desc, precio, imgRoute, stock, categoria}) => {


    const [cantidad, setCantidad] = useState(0)
    // const [cart, setCart] = useState([])  
    // const [products, setProducts] = useState([])
    const { agregarAlCarrito, isInCart} = useContext(CartContext)
   

    const handleAgregar = () => {
        if (cantidad === 0) return
        if (!isInCart(id)){
        const addItem =  {id, precio, nombre, stock, cantidad}

        agregarAlCarrito(addItem)
        }
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
        <h2>Precio:$ {precio}</h2>
        {
            isInCart(id)
            ?
            <Link to={"/cart"} className="btn btn-success my-3" >Terminar Mi Compra</Link>
            :<>
            <ItemCount max={stock} counter={cantidad} setCounter={setCantidad} handleAgregar={handleAgregar} />
            <hr />
            <div className="d-grid gap-2 col-4 mx-auto">
            <Button variant="warning" onClick={handleAgregar} disabled={cantidad ===0}>Agregar al carrito</Button>
            </div>
            </>
        }

        </div> 
        </>
    )
    }   
    //se puede configurar en ItemCount el max y el minimo tambien.