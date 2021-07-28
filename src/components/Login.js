import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render () {
        return (
            <>
                <Container >
                    <Row style={{ marginTop: '150px' }} className="main-row">
                        <form>
                            <h3 style={{ marginTop: '50px' }}>Login Details</h3>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="text" className="form-control" placeholder="example@gmail.com" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Type your password" />
                            </div>
                            <div className="form-group-button">
                                <button type="submit" className="custom-btn">Login</button>
                                <p style={{ textAlign: 'right', marginRight: '25px', marginBottom: '25px' }}>
                                    Don't have a account ? <Link to="/signup">Signup now</Link>
                                </p>
                            </div>
                        </form>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Login;