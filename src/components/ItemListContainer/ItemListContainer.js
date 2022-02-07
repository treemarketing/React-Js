import {useEffect, useState} from 'react';
import {ItemList} from './itemList'
import {stockJs} from "../producto"

export const ItemListContainer = () => {
    //hook
    const [products, setProducts] = useState([])

    //simulo carga servidor
    const getPromise = (stock) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            return resolve(stock)
          },3000)
        })
      }


//uso la promesa 
    useEffect(() => {
        getPromise(stockJs).then( result => {
          setProducts(result)
        })
        
      }, [])
//products que habia mapeado lo exporto
return( 
    <>
    <ItemList products={products}/>
    </>

)
}     