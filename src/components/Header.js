import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Header extends React.Component {
    render () {
        return (
            <>
                <Navbar bg="primary" fixed="top" variant="dark">
                    <Container>
                    <Nav className="me-auto">
                        <Link to="/" className="navbarfont"> Dashboard </Link>
                        <Link to="/mycourses" className="navbarfont"> My Courses </Link>
                        <Link to="/signup" className="navbarfont"> Signup </Link>
                        <Link to="/login" className="navbarfont"> Login </Link>
                    </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Header;