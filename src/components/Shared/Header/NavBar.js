import React from 'react';
import { ButtonGroup, ButtonToolbar, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';
import './NavBar.css'
const NavBar = () => {
  const {user,LogOut,isLoading,userNmae,}=useAuth();
 
    return (
       <>
     <Navbar  bg="dark" collapseOnSelect expand="lg" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand as={HashLink} to="/home"><h3 className="logo">Pain Care</h3></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/ourservice">Our Services</Nav.Link>
      <Nav.Link as={HashLink} to="/doctor">Doctor</Nav.Link>
      <Nav.Link as={HashLink} to="/about">About</Nav.Link>
        
      {
        user.email?
        <button onClick={LogOut} className="btn btn-light">Log out</button>
        :
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      
      <Navbar.Text>
      
        {user&&<p>{user.displayName}</p>}
      
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
       </>
    );
};

export default NavBar;