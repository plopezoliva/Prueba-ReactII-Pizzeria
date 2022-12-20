import React, { useContext } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import  { PizzaContext } from '../context/PizzaProvider';

const RequestDetail = () => {
  
  
    const { id } = useParams();
    const{dataPizza} = useContext(PizzaContext)
    
    const pizzaDetail = dataPizza.find((pizza)=> pizza.id === id);
    
    
    
    return (
      <Container>
      <Row>
        <Col lg="5">
        <div className='size-img-detail'>
        <img className='img-detail' src={pizzaDetail.img} alt={pizzaDetail.name}/>
        </div>
        </Col>
        <Col lg= "7">
        <p>{pizzaDetail.name}</p>
        <p>{pizzaDetail.desc}</p>
        <ul>
         {pizzaDetail.ingredients.map((ingredient, i) => (
                  <li  key={i}>🍕{ingredient}</li>
                ))}
              </ul>
        </Col>
        
      </Row>
    </Container>
      
        
    );
  };

export default RequestDetail