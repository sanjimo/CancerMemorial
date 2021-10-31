import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/icon.png';
import useAuth from '../../../hooks/useAuth';



const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bold text-secondary">
                    <img
                    alt="logo"
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                     />
                    <span className="text-danger">Cancer</span>Memorial</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                        <Nav className="ms-auto">
                            <NavLink className="text-decoration-none text-secondary fs-6 ms-3 fw-bold" to="/home">Home</NavLink>
                            <NavLink className="text-decoration-none text-secondary fs-6 ms-3 fw-bold" to="/doctors">Doctors</NavLink>
                            <NavLink className="text-decoration-none text-secondary fs-6 ms-3 fw-bold" to="/treatment">Treatments</NavLink>
                            <NavLink className="text-decoration-none text-secondary fs-6 ms-3 fw-bold" to="/appointment">Appointment</NavLink>
                            {
                                user.email && <span className="text-secondary fw-bold ms-3">{user.displayName}</span>
                            }
                            {
                                user.email?
                                <button className="text-decoration-none text-white fs-6 ms-3 fw-bold btn btn-secondary btn-sm" onClick={logOut}>Logout</button>
                                :
                                <NavLink className="text-decoration-none text-secondary fs-6 ms-3 fw-bold" to="/login">Login</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;