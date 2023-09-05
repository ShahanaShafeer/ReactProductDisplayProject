import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavPage = () => {
  return (
    <div>
        <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='fs-2 text-dark'></Navbar.Brand>
          <Nav className="ms-auto fs-5">
            <Nav.Link href="#home"><Link style={{textDecoration:"none",color:"black"}} to={"/home"}>Home</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavPage