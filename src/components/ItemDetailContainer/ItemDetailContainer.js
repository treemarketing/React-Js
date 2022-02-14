import {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import { ItemDetail } from "./ItemDetail";
import { pedirDatos } from '../pedirDatos';









export const ItemDetailContainer =() => {
  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState(null)
  
  const { itemId } = useParams()
  console.log(itemId)
  console.log(item)
 




useEffect(() => {
  setLoading(true)

    pedirDatos()
    .then((res) => {
        const encontrado = res.find((el) => el.id === Number(itemId))
        console.log(setItem(encontrado))
      })
      .finally(() => {
        setLoading(false)
      })

     }, [])




    return( 
  
      <>
      {
          loading
          ? <h2>Cargando.... </h2>
          : <ItemDetail {...item}/>
      }
      </>
        )
        };  
     





