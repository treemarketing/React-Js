import {useEffect, useState} from 'react';
import {ItemList} from './itemList';
import {useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import StickyFooter from '../Footer/StickyFooter';
import './spiner.scss'



export const ItemListContainer = () => {

    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    const { catId } = useParams();
  

   

    useEffect( () => {
        setLoading(true)
//armo refencia y la inserto en la variable importo getDocs y collection
        const productosRef = collection(db, "productos")
        const q = catId ? query(productosRef, where("categoria","==", catId)) : productosRef
        
        
        



    //     getDocs(o)
    //     .then((resp) => {
    //     setProductos(resp.docs.map((doc) =>{
    //         return {
    //             id: doc.id,
    //             ...doc.data()
    //         }
    //     })) 
    // })
    //     .finally(() =>{
    //         setLoading(false)
    //     } )
//obtengo una collecion sin filtro 
getDocs(q)
        .then((resp) => {
        setProductos(resp.docs.map((doc) =>{
            return {
                id: doc.id,
                ...doc.data()
            }
        })) 
    })
        .finally(() =>{
            setLoading(false)
        } )

        //  pedirDatos()
        
        //     .then((res) => {
        //         console.log(res)
        //         if(catId) {
        //             const filtrados = res.filter(el => el.categoria === catId );
        //             setProductos(filtrados)
        //         } else {
        //             setProductos(res)
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        //     .finally(() => {
        //        setLoading(false)
        //     })

    }, [catId])
    

    return (
        <>
            {
                loading 
                    ? <div className="d-flex justify-content-center">
                    <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                  </div>
                    :
                    <ItemList productos={productos}/>
            } 

<StickyFooter/>

        </>   
    )
}