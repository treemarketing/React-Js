import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "./cart.scss"



export const Cart = () => {

    const {cart, totalCart, vaciarCart, eliminarItem} = useContext(CartContext)

    return (
    <div className="carritoContainer">
        <h2> Tu Compra</h2>
        <hr/>
        
        {
            cart.map((item) => (
                
                <div key={item.id}>
                    {/* <img src= {item.imgRoute} alt={item.desc} className="imgCarrito"/>
                    <p>{item.nombre}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio:$ {item.precio * item.cantidad}</p>
                    <button className="btn btn-warning d-flex gap-2 col-1 mx-auto" onClick={() => eliminarItem(item.id)}><DeleteForeverIcon /></button> */}


                    <table class="table table-dark table-hover text-center">
  <thead>
    <tr>
      <th scope="col">Productos</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Eliminar Item</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{item.nombre}</td>
      <td>$ {item.precio * item.cantidad}</td>
      <td>{item.cantidad}</td>
      <td><button className="btn btn-warning d-flex gap-2 col-2 mx-auto" onClick={() => eliminarItem(item.id)}><DeleteForeverIcon /></button></td>
      
    </tr>
    </tbody>
</table>



                </div>
            ))
        }
        <hr/>

        <h2>Total $ {totalCart()} </h2>

        <div className="my-2">
        <button className="btn btn-danger" onClick={vaciarCart}>Vaciar Carrito</button>
        <button className="btn btn-success mx-2" >Terminar Mi Compra</button>
        </div>
    </div>
    )
}