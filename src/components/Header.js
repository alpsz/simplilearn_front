import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


class Header extends React.Component {
    render () {
        return (
            <>
                <Navbar bg="primary" fixed="top" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">NavBar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Header;