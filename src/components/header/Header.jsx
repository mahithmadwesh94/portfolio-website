import React from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./header.css";
import { HashLink } from 'react-router-hash-link';


function Header({ color,backgroundColor,changeThemeHandler }) {
    return (
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor:backgroundColor,color:color}} >
            <Container fluid className="navbarContainer pb-2 ps-2 pe-2">
                <Navbar.Brand href="#home">
                    <NavLink className=" ms-auto" to='/'>
                        <div className="navbarLeft">
                            <span className="logo ms-4">
                                M
                            </span>

                            <span className="logoText" style={{ color: color }}>
                                Mahith Madwesh
                            </span>
                        </div>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto" >
                    <HashLink activeStyle={{ borderBottom: '1px solid white' }} className="nav-link" style={{ color: 'white' }} to="/">
                    <Nav.Link style={{ color: color }} className="navLink" href="#about">About</Nav.Link>
                    </HashLink>
                    <HashLink activeStyle={{ borderBottom: '1px solid white' }} className="nav-link" style={{ color: 'white' }} to="#top">
                    <Nav.Link style={{ color: color }} className="navLink" href="#about">Blog</Nav.Link>
                    </HashLink>
                    <HashLink activeStyle={{ borderBottom: '1px solid white' }} className="nav-link" style={{ color: 'white' }} to="#top">
                    <Nav.Link style={{ color: color }} className="navLink" href="#about">Projects</Nav.Link>
                    </HashLink>
                    <HashLink activeStyle={{ borderBottom: '1px solid white' }} className="nav-link" style={{ color: 'white' }} to="#top">
                    <Nav.Link style={{ color: color }} className="navLink" href="#about">Contact</Nav.Link>
                    </HashLink>

                        {/* <Link  className=" ms-auto" to='/'> <Nav.Link style={{ color: color }} className="navLink" href="#about">About</Nav.Link></Link>
                        <Link className=" ms-auto" to='/resume'><Nav.Link style={{ color: color }} className="navLink ms-auto" href="#resume">Resume</Nav.Link></Link>
                        <Link className=" ms-auto" to='/portfolio'><Nav.Link style={{ color: color }} className="navLink ms-auto" href="#portfolio">Projects</Nav.Link></Link>
                        <Link className=" ms-auto" to='/contact'><Nav.Link style={{ color: color }} className="navLink ms-auto" href="#contact">Contact</Nav.Link></Link> */}
                    </Nav>

                    <Nav className="mx-auto">
                      <span className='me-1'>Light</span>  <Form.Check
                            type="switch"
                            defaultChecked={true}
                            id="custom-switch"
                            onChange={(event) => changeThemeHandler(event.target.checked)}
                            label="Dark "
                        />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
