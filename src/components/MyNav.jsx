import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function MyNav() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/products">Products</NavLink >
            <NavLink className="nav-link" to="/products/3">Product Details</NavLink >
            <NavLink className="nav-link" to="/login">Login</NavLink >
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
