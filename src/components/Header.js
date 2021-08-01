import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';


class Header extends React.Component {
    logOut = () => {
        localStorage.removeItem('token');
        this.props.dispatch(logoutUser());
    }
    render () {
        const { auth } = this.props;
        const isLoggedin = auth.isLoggedin;
        return (
            <>
                <Navbar bg="primary" fixed="top" variant="dark">
                    <Container>
                    <Nav className="me-auto">
                        <Link to="/" className="navbarfont"> Dashboard </Link>
                        {isLoggedin && <Link to="/mycourses" className="navbarfont"> My Courses </Link>}
                        {!isLoggedin && <Link to="/signup" className="navbarfont"> Signup </Link>}
                        {!isLoggedin && <Link to="/login" className="navbarfont"> Login </Link>}
                        {isLoggedin && <li style={{cursor:"pointer"}} onClick={ this.logOut } className="navbarfont"> Logout </li>}
                    </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps)(Header);