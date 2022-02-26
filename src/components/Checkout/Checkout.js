import { useContext } from "react"
import CartContext from "../context/CartContext"









export const Checkout = () =>{

    const {cart, totalCart} = useContext(CartContext)

    const orden = {
        comprador: {
            name: '',
            email: '',
            tel: ''
        },
        item: cart,
        total: totalCart
    }







return(
    <div className="container my-5">
        <h2>Checkout</h2>
        <hr/>


    </div>

)

}