import  Card  from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'





//doy formato al item individual
export const Item = ({id,nombre,desc,precio,imgRoute,categoria}) => {

    return( 
        <section>
           <Card style={{ width: '30rem' }}>
  <Card.Img variant="top" src={imgRoute} />
  <Card.Body>
  <Card.Title as="h5">Categoria: {categoria}</Card.Title>
    <Card.Title as="h2">{nombre}</Card.Title>
    <Card.Text as="h5">{desc}</Card.Text>
    <Card.Text as="h5">Precio: $ {precio}</Card.Text>
    <Link to={`/detalle/${id}`}>
    <Button variant="danger">Ver Más</Button>
    </Link>
  </Card.Body>
</Card>
        </section> 
    )
    }   
    

