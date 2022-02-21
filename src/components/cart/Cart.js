import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



export const Cart = () => {

    const {cart, totalCart, vaciarCart, eliminarItem} = useContext(CartContext)

    return (
    <div>
        <h2> Tu Compra</h2>
        <hr/>

        {
            cart.map((item) => (
                <div key={item.id}>
                    <p>{item.nombre}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio:$ {item.precio * item.cantidad}</p>
                    <button className="btn btn-warning d-flex gap-2 col-1 mx-auto" onClick={() => eliminarItem(item.id)}><DeleteForeverIcon /></button>
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