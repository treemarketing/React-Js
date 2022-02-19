import {useEffect, useState} from 'react';
import {ItemList} from './itemList';
import {useParams } from 'react-router-dom';
import { pedirDatos } from '../pedirDatos';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config';


export const ItemListContainer = () => {

    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    const { catId } = useParams();
    console.log(catId)
    
    useEffect( () => {
        setLoading(true)
//armo refencia y la inserto en la variable
//         const productosRef = collection(db, "productos")

// getDocs(productosRef)
//         .then((resp) => {
//         setProductos(resp.docs.map((doc) =>{
//             return {
//                 id: doc.id,
//                 ...doc.data()
//             }
//         })) 
//     })
//         .finally(() =>{
//             setLoading(false)
//         } )

         pedirDatos()
        
            .then((res) => {
                console.log(res)
                if(catId) {
                    const filtrados = res.filter(el => el.categoria === catId );
                    setProductos(filtrados)
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
console.log(productos)

    return (
        <>
            {
                loading 
                    ? <h2>Cargando..</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    )
}