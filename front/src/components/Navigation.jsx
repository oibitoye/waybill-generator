import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const NavComp = ({
    user
}) => {
    return (
        <Navbar bg="dark" expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">WayBill</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto w-2/3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/waybill-form">Generate Waybill</Nav.Link>
              <NavDropdown.Divider />
              {user?.role > 2 && <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">View Users</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/waybill-form">Create User</NavDropdown.Item>
              </NavDropdown>}
            </Nav>
            <Navbar.Text className="w-50 text-end">
              Signed in as: <a href="#profile">{user?.firstName} {user?.lastName}</a>
            </Navbar.Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Navbar.Text className="w-25 text-end">
              <a href="/logout">Logout</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavComp;
