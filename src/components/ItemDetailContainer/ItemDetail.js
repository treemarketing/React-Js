import {ItemCount } from "../ItemCount/ItemCount";





//doy formato al item individual
export const ItemDetail = ({id, nombre, desc, precio, imgRoute, stock, categoria}) => {

    return( 
        <>
        
        <h2>{nombre}</h2>
        <div className="itemDetail">
        <img src={imgRoute} alt={desc}/>
        </div>
        <div>
        <p>{desc}</p>
        <ItemCount max={stock} />
        <h2>Precio:$ {precio}</h2>
        </div> 
        </>
    )
    }   
    