import  Card  from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'





//doy formato al item individual
export const Item = ({id,nombre,desc,precio,imgRoute,categoria}) => {

    return( 
        <section>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imgRoute} />
  <Card.Body>
  <Card.Title>Categoria: {categoria}</Card.Title>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      {desc}
    </Card.Text>
    <Card.Text>
     Precio: $ {precio}
    </Card.Text>
    <Link to={`/detalle/${id}`}>
    <Button variant="danger">Ver Más</Button>
    </Link>
  </Card.Body>
</Card>
        </section> 
    )
    }   
    

