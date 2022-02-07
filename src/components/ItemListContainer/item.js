import  Card  from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




//doy formato al item individual
export const Item = ({id,nombre,desc,precio,imgRoute}) => {
    return( 
        <section>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imgRoute} />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      {desc}
    </Card.Text>
    <Card.Text>
     Precio: $ {precio}
    </Card.Text>
    <Button variant="danger">Ver Más</Button>
  </Card.Body>
</Card>
        </section> 
    )
    }   

