import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"
import {useContext} from "react"
import {CartContext} from "../.././context/CartContext"
import './cartWidget.scss'




export const CartWidget = () => {


    const {cantidadCart, totalCart, cart} = useContext(CartContext)

// de esta forma condiciono el cart para que solo aparezca cuando tenga un producto en el carrito
return (
<Link to="/cart" className={cart.length === 0 ? "cart-widget cart-hidden" :"cart.widget" }>
<ShoppingCartIcon color="Dark" fontSize="large" />
<span>Cantidad:{cantidadCart()}</span> 
<br />
<span> Total: $ {totalCart()}</span> 
</Link>

)
}
