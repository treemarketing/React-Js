import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"
import {useContext} from "react"
import {CartContext} from "../.././context/CartContext"





export const CartWidget = () => {


    const {cantidadCart, totalCart} = useContext(CartContext)


return (
<Link to="/cart">
<ShoppingCartIcon color="Dark" fontSize="large" />
<span>{cantidadCart()}</span> 
<br />
<span> $ {totalCart()}</span> 
</Link>

)
}
