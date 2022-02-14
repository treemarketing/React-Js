import {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import { ItemDetail } from "./ItemDetail";
import { pedirDatos } from '../pedirDatos';









export const ItemDetailContainer =() => {
  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState(null)
  
  const { itemId } = useParams()
 




useEffect(() => {
  setLoading(true)

    pedirDatos()
      .then((res) => {
      setItem( res.find((el) => el.id === Number(itemId)) )
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
     





