import {useEffect, useState} from 'react';
import {ItemList} from './itemList'
import {stockJs} from "../producto"
import {useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const {categoryid} = useParams()
  console.log(categoryid)
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
          if(categoryid){
          //realizo filtrado para poder usar useParams y obtener una ruta dinamica
         const filtrado = result.filter((tipo) => tipo.categoria === categoryid);
         setProducts(filtrado)
        }else{
          setProducts(result)
        }
        })

       }, [])
//products que habia mapeado lo exporto
return( 
  
    <>
    <ItemList products={products}/>
    </>
)
}