import React from 'react'
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';



const NavbarIcon = () => {
    const setisActive = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <Navbar bg= 'primary' expand="lg" >
    <Container >
        <div className="text-home">
    <NavLink  className= {setisActive} to="/">
    🍕Pizzería Mamma Mía!
    </NavLink>
    </div>
    <div className="link"> 
    <NavLink className={setisActive} to="/carrito">
    🛒
    </NavLink>
    </div>
    
    </Container>
    </Navbar>
    
    
  )
}

export default NavbarIcon