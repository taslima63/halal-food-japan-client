import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from './../../../images/japan70.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

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
                            {user ? <button className='btn btn-link text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                : <Nav.Link eventKey={2} href="/login">
                                    Login
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;