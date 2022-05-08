import React from "react";
import {Container , Row , Col,Navbar,Nav} from 'react-bootstrap'
import {LinkContainer } from 'react-router-bootstrap'
const Header = () => {
    return(
            <Navbar variant="primary" className="Navbar bg-primary" >
  <Container>
    <LinkContainer to='/'>
      <Navbar.Brand ><h3 className="logo text-white" >Shoppzy</h3></Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <LinkContainer to="/cart"><Nav.Link ><h5 className="nav-icon text-white">Cart</h5></Nav.Link></LinkContainer>
        <LinkContainer to="/login"><Nav.Link ><h5 className="nav-icon text-white">Sign in</h5></Nav.Link></LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header