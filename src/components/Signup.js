import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { clearAuthState } from '../actions/auth';
import { register } from '../actions/register';
import '../assets/css/signup.css';

class Signup extends React.Component {
    state = { email: '', password: '' };
    
    componentWillUnmount() {
        this.props.dispatch(clearAuthState());
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        if ( email && password) {
            this.props.dispatch(register(email, password));
        } 
    }


    render () {
        const { inProgress, isLoggedin, error } = this.props.auth;
        if (isLoggedin) {
            return <Redirect to="/login" />
        }
        return (
            <>
                <Container >
                    <Row style={{ marginTop: '150px' }} className="main-row">
                        <form>
                            <h3 style={{ marginTop: '50px' }}>Signup Details</h3>
                            { error && <div className="alert error-dailog">{ error }</div> }
                            <div className="form-group">
                                <label>Email Address</label>
                                <input 
                                    type="text" 
                                    value = {this.state.email}
                                    onChange = { e => this.setState({ email: e.target.value })}
                                    className="form-control" 
                                    placeholder="example@gmail.com" 
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    value = {this.state.password}
                                    onChange= { e => this.setState({ password: e.target.value })}
                                    className="form-control" 
                                    placeholder="Type your password" 
                                />
                            </div>
                            <div className="form-group-button">
                                <button 
                                    type="submit" 
                                    className="custom-btn"
                                    onClick = { this.handleSubmit }
                                    disabled = { inProgress }
                                >
                                    { inProgress ? "Signing up..." : "Sign up" }
                                </button>
                                <p style={{ textAlign: 'right', marginRight: '25px', marginBottom: '25px' }}>
                                    Already registered ? <Link to="/login">Login now</Link>
                                </p>
                            </div>
                        </form>
                    </Row>
                </Container>
            </>
        );
    };
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Signup);