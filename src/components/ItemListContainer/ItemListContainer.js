import {useEffect, useState} from 'react';
import {ItemList} from './itemList'
import {useParams } from 'react-router-dom';
import { pedirDatos } from '../pedirDatos';

export const ItemListContainer = () => {

  const { catId } = useParams()
console.log(catId)

    //hook
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
  


//uso la promesa 
    useEffect(() => {
        setLoading(true)
        
        pedirDatos()
        .then((res) => {
          if (catId) {
              setProductos( res.filter((el) => el.categoria === catId ) )
          } else {
              setProductos(res)
          }
      })
      .catch((err) => {
          console.log(err)
      })
      .finally(() => {
         setLoading(false)
      })

       }, [catId])
//products que habia mapeado lo exporto
return( 
  
    
    <>
    {
        loading
        ? <h2>Cargando.... </h2>
        : <ItemList productos={productos}/>
    }
    </>
  
)
}