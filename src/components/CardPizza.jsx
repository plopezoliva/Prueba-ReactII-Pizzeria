import React, { useContext } from 'react'
import { Button, Card, CardGroup, Col, Row} from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import  { PizzaContext } from '../context/PizzaProvider';
import { formatNumber } from "../helpers/formatNumber";

const CardPizza = () => {

    const{dataPizza,addCart} = useContext(PizzaContext)
    const navigate = useNavigate();


  return (
    <CardGroup  className='cardsGrup'>
      <Row xs={1} md={3} className= "g-4">
    {dataPizza?.map((pizza) => (
        <div key={pizza.id} >
          <Col>
         <Card className='cards'>
        <Card.Img variant="top" src={pizza.img} alt='' className='imgPizza' />
        <Card.Body>
          <Card.Title>Pizza {pizza.name}</Card.Title>
          <Card.Text>
          <hr></hr>
              <p className="card-text">
                <b>Ingredientes:</b>
              </p>

              <ul>
                {pizza.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <h2 className="text-center text-dark pb-3">
              Precio: ${formatNumber(pizza.price)}
            </h2>
          </Card.Text>
          <Button className='boton' onClick={()=>navigate(`/pizza/${pizza.id}`)} variant="primary">Ver mas</Button>
          <Button onClick={()=>addCart(pizza.id)} variant="primary">Añadir</Button>
        </Card.Body>
        
      </Card>
           </Col>
    </div>
    )
  
    )
    
}
   </Row>
    </CardGroup>
  )
}
export default CardPizza