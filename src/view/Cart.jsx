import React, { useContext } from 'react'
import { PizzaContext } from '../context/PizzaProvider'

const Cart = () => {
  const{cart} = useContext(PizzaContext)
  return (

   
    <div>
      {cart?.map((item )=>(<h1>{item.name}</h1>))}
    </div>
  )
}

export default Cart