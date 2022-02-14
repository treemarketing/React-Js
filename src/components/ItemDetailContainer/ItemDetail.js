





//doy formato al item individual
export const ItemDetail = ({id, nombre, desc, precio, imgRoute, stock, categoria}) => {

    return( 
        <section>
        <h2>{nombre}</h2>
        <img src={imgRoute} alt={desc}/>
        <p>{desc}</p>
        <h5>Precio:$ {precio}</h5>
    
        </section> 
    )
    }   
    