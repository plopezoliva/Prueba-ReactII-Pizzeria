import React, {  createContext, useEffect, useState } from 'react'

export const PizzaContext = createContext();
const PizzaProvider = ({children}) => {
  const [dataPizza , setdataPizza] = useState([])
  const [cart,setCart]  = useState([])
  
const endpoint= "pizzas.json";

const buscarData = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data);
  setdataPizza(data);
};


useEffect(() => {
  buscarData();
}, []);


const addCart = (id) => {
  const pizza = dataPizza.find((x)=> x.id === id);
  // setTotal(total+pizza.price);
  
  const searchCart = cart.findIndex((x)=>x.id ===id);
  if(searchCart >= 0) {
    cart[searchCart].count++
    setCart([...cart]);
  } else {
    const newObject = {
      id:pizza.id,
      name: pizza.name,
      price: pizza.price,
      img: pizza.img,
      count: 1
    };
    setCart([...cart, newObject]);
  }
}

  return (
    <PizzaContext.Provider value={{dataPizza, cart, addCart}}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaProvider