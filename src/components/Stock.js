import {useEffect, useState} from 'react';
import stockJson from './producto.json'
import {stockJs} from "./producto.js"









const getPromise = (stockJson) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(stockJson)
    },3000)
  })
}



export function Stock(){
    const title = "hola don pepito"
  const [cart, setCart] = useState([])  
  const [products, setProducts] = useState([
  // {
  // id:1,
  // nombre: 'papas',
  // precio: 1000
  // },
  // {
  //   id:2,
  //   nombre: 'hamburguesa',
  //   precio: 1000
  // },
  // {
  //   id:3,
  //   nombre: 'empanada',
  //   precio: 200
  // }    
 ])
  const agregarAlCarrito = (id) => {
    const newCart = [...cart]
    const product = products.find(prod => prod.id === id);
    setCart([
      ...newCart,
      product
    ])  
  };
  
 /* useEffect(() => {
    if(cart.length > 3) {
      console.log("desde useEffect", cart)
    }
  }, [cart])
*/
useEffect(() => {
  getPromise(stockJson).then( result => {
    setProducts(result)
  })
  
}, [])



  return(
    <div>
      <h1>{title}</h1>
      {products.length ? (
        products.map(product => (
          <>
          <article key={product.id}>
          <h2>{product.nombre}</h2>
          <h5>{product.desc}</h5>
          <h3>$ {product.precio}</h3>
          <img style={{ width:'20%' }}src={product.images} alt={product.nombre}/>
          <br />
          <button onClick={() => agregarAlCarrito(product.id)}>Agregar al carrito</button>
          </article>
          <hr/>
          </>
        ))
      ):<p>No hay productos en la tienda</p>}
      
      <h2>Mi Carrito</h2>
      {cart.length ? (
        cart.map(product => (
        <>
          <article key={product.id}>
          <h5>{product.nombre}</h5>
          <p>{product.precio}</p>
          </article>
          <hr/>
        </>
        ))
      ): <p>No hay productos en el carrito</p>}
    </div>
    );  
  }