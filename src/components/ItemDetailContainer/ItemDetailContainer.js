import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { ItemDetail } from "./ItemDetail";
import { getDoc, doc} from 'firebase/firestore';
import { db } from '../firebase/config';










export const ItemDetailContainer =() => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);
  
  const { itemId } = useParams();
 




useEffect(() => {
  setLoading(true)

//vincular con FIREBASE
  const docRef = doc(db,"productos", itemId)

getDoc(docRef)
  .then((doc) =>{
    setItem({id: doc.id, ...doc.data()})
  
  })
    // pedirDatos()
    //   .then((res) => {
    //   setItem( res.find((el) => el.id === Number(itemId)) )
    //   })
      .finally(() => {
    
        setLoading(false)
      })

     }, [itemId])
  




    


     
  


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
     





