import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './NavBar.css'
const NavBar = () => {
    return (
       <>
     <Navbar  bg="dark" collapseOnSelect expand="lg" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="#home"><h3 className="logo">Pain Care</h3></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#experts">Doctor</Nav.Link>
        
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      
      <Navbar.Text>
        
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
       </>
    );
};

export default NavBar;