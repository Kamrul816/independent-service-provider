import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <>
  <Navbar bg="primary sticky-top" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
        <img src={logo} height ="80" alt="" />
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#my services">My Services</Nav.Link>
      <Nav.Link href="#blog">Blog</Nav.Link>
      <Nav.Link href="#about active">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    );
};

export default Header;