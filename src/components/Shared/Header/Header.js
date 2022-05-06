import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../../images/japan70.png';

const Header = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt='' /> Halal Food Japan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav>
                            <Nav.Link as={Link} to='/home' >Home</Nav.Link>
                            <NavLink as={Link} to='/items'>Items</NavLink>
                            <NavLink as={Link} to='/login'>Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;