import {useEffect, useState} from 'react';
import {ItemList} from './itemList';
import {useParams } from 'react-router-dom';
import { pedirDatos } from '../pedirDatos';


export const ItemListContainer = () => {

    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    const { catId } = useParams();
    console.log(catId)
    
    useEffect( () => {
        setLoading(true)

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
                    ? <h2>Loading...</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    )
}