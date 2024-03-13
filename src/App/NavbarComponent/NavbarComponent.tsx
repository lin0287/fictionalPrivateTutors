import React from 'react';
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Link} from "react-router-dom";

export function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand as={Link} to="/"><h2>Fictional Private Tutors</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/team">Our Team</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}