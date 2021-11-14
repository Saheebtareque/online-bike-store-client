import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import useAuth from '../../../hooks/useAuth'
const Naviagtion = () => {
    const { user, logout } = useAuth();
    return (
        <>
        <Navbar bg="dark" variant="warning" sticky="top" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home" className="text-success">Online Motorbike Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home" className="red-color">Home</Nav.Link>
                    <Nav.Link as={Link} to="/explore" className="red-color">Explore</Nav.Link>
                    {user?.email && <Nav.Link as={Link} to="/dashboard" className="red-color">DashBoard</Nav.Link>}

                    <span className="red-color">{user.displayName} </span>
                    {user?.email ? <button type="button" class="btn btn-success" onClick={logout}>Log out</button> : <Nav.Link as={Link} to="/login" className="red-color">Login</Nav.Link>}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Naviagtion;