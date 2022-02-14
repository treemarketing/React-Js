import {useEffect, useState} from 'react';
import {ItemList} from './itemList';
import {useParams } from 'react-router-dom';
import { pedirDatos } from '../pedirDatos';

export const ItemListContainer = () => {

    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const { catId } = useParams()

    useEffect( () => {
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