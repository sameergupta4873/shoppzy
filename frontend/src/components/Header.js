import React from 'react'
import {Navbar ,Nav,Container } from 'react-bootstrap'
const Header = () => {
  return (
    <>
    
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="/">Shoppzy</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/cart"><i className="fa-solid fa-cart-shopping"></i> CART</Nav.Link>
        <Nav.Link href="/sign-in"><i className="fa-solid fa-user"></i> SIGN IN</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  
    
  </>
  ) 
}

export default Header