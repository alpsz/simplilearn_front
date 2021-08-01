import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { clearAuthState, login } from '../actions/auth';

class Login extends React.Component {
    state = {
                email: '',
                password: ''
            }
    
    componentWillUnmount() {
        this.props.dispatch(clearAuthState());
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        if(email && password) {
            this.props.dispatch(login(email, password ))
        }
    };

    render () {
        const { error, inProgress, isLoggedin } = this.props.auth;

        if ( isLoggedin ) {
            return <Redirect to = "/" />
        }

        return (
            <>
                <Container >
                    <Row style={{ marginTop: '150px' }} className="main-row">
                        <form onSubmit = { this.handleSubmit }>
                            <h3 style={{ marginTop: '50px' }}>Login Details</h3>
                            { error && <div className="alert error-dailog">{ error }</div> }
                            <div className="form-group">
                                <label>Email Address</label>
                                <input 
                                    type="text" 
                                    value = { this.state.email }
                                    onChange = { e => this.setState({ email: e.target.value })}
                                    className="form-control" 
                                    placeholder="example@gmail.com" 
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    value = { this.state.password }
                                    onChange = { e => this.setState({ password: e.target.value })}
                                    className="form-control" 
                                    placeholder="Type your password" 
                                />
                            </div>
                            <div className="form-group-button">
                                <button 
                                    type="submit" 
                                    className="custom-btn"
                                    disabled = {inProgress}
                                >
                                    { inProgress ? "Logging in..." : "Login" }
                                </button>
                                <p style={{ textAlign: 'right', marginRight: '25px', marginBottom: '25px' }}>
                                    Don't have a account? <Link to="/signup">Register</Link>
                                </p>
                            </div>
                        </form>
                    </Row>
                </Container>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Login);