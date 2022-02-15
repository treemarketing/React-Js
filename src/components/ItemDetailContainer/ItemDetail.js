





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
        <h2>Precio:$ {precio}</h2>
    
        </div> 
        </>
    )
    }   
    