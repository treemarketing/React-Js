import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

//primero obtiene datos del local storage 
const cartLocalStorage = JSON.parse(localStorage.getItem('cart') || "[]")

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(cartLocalStorage)

    const agregarAlCarrito = (item) => {
      setCart([...cart, item])
    }
    
    ///some retorna true o false en cambio find retorna el elemento
    
    const isInCart = (id) => {
      return cart.some((prod) => prod.id ===id)
    }
    
    const cantidadCart = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }
    
    const totalCart = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad*prod.precio, 0)
    }
    const vaciarCart = () => {
      return setCart([])
    }
    const eliminarItem = (id) => {
      return setCart(cart.filter((prod) => prod.id !== id))
    }

    //Insertar items en el localstorage 
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    },[cart])

    return (
        <CartContext.Provider value={{cart, agregarAlCarrito, isInCart, cantidadCart, totalCart, vaciarCart, eliminarItem}}>
            {children}
        </CartContext.Provider>
    )
}