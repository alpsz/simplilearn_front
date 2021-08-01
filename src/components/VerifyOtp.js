import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { addCourse } from '../actions/courses';

class VerifyOtp extends React.Component {
    state= {
        otp: '',
        error: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.otp != '123456') {
            this.setState({error: "Invalid otp. Try again with '123456'"});
        }else{
            this.setState({error: ""});
            const courseId = this.props.match.params.courseId;
            const userId = this.props.auth.user._id;
            this.props.dispatch(addCourse(courseId, userId));
        }

    }

    render () {
        const { error } = this.state;
        
        return (
            <>
                <Container >
                    <Row style={{ marginTop: '150px' }} className="main-row">
                        <form onSubmit={this.handleSubmit}>
                            <h3 style={{ marginTop: '25px', marginBottom: '25px' }}>OTP Verification</h3>
                            { error && <div className="alert error-dailog">{ error }</div> }
                            <img style={{ marginLeft: '150px' }} src="https://img.freepik.com/free-vector/login-password-verification-code-push-message_212005-37.jpg?size=338&ext=jpg" />
                            <div className="form-group">
                                <label>Enter OTP</label>
                                <input 
                                    type="text"
                                    value={this.state.otp}
                                    onChange={e => this.setState({otp: e.target.value})} 
                                    className="form-control" 
                                    placeholder="******" 
                                />
                            </div>
                            <div className="form-group-button" style={{ marginBottom: '50px', marginTop: '50px' }}>
                                <button className="custom-btn">Verify and Pay</button>
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
        courses: state.courses,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(VerifyOtp);