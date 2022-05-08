import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from './../../../images/halal3-80.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt='' /> Halal Food Japan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav>
                            <Nav.Link as={Link} to='home' >Home</Nav.Link>

                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="manageInventory">Manage Inventory</Nav.Link>
                                    <Nav.Link as={Link} to="myItems">My Items</Nav.Link>
                                    <Nav.Link as={Link} to="addItems">Add New Items</Nav.Link>
                                </>
                            }
                            {user ? <button className='btn btn-link text-decoration-none' onClick={handleSignOut}>Logout</button>
                                : <Nav.Link eventKey={2} as={Link} to="login">
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