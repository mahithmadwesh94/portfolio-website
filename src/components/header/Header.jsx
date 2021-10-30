import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./header.css"

function Header() {
    return (
        <Navbar expand="lg" variant="dark" sticky="top">
            <Container fluid className="navbarContainer pb-2 ps-2 pe-2">
                <Navbar.Brand href="#home">
                    <div className="navbarLeft">
                        <span className="logo">
                            M
                        </span>

                        <span className="logoText">
                            Mahith Madwesh
                        </span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className=" ms-auto" to='/'> <Nav.Link className="navLink" href="#about">About</Nav.Link></Link>
                        <Link className=" ms-auto" to='/resume'><Nav.Link className="navLink ms-auto" href="#resume">Resume</Nav.Link></Link>
                        <Link className=" ms-auto" to='/portfolio'><Nav.Link className="navLink ms-auto" href="#portfolio">Portfolio</Nav.Link></Link>
                        <Link className=" ms-auto" to='/contact'><Nav.Link className="navLink ms-auto" href="#contact">Contact</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
