import React from 'react'
import { Container, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const NavbarIcon = () => {
    const setisActive = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <Navbar bg= 'ligth' expand="lg" >
    <Container >
        <div className="text-home">
    <NavLink  className= {setisActive} to="/"> 🍕 
    <Link to="/">Pizzería Mamma Mía!</Link>
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