import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { boughtCourses, fetchCourses } from '../actions/courses';
import { authenticateUser } from '../actions/auth';
import { getAuthToken } from '../utils/utils';
import jwtDecode from 'jwt-decode';

// Components import
import Header from './Header';
import Signup from './Signup';
import Dashboard from './Dashboard';
import MyCourses from './MyCourses';
import Login from './Login';
import PaymentCard from './PaymentCard';
import VerifyOtp from './VerifyOtp';
import CourseDetail from './CourseDetail';



const PrivateRoute = (PrivateRouteProps) => {
    const { isLoggedin, path, component: Component } = PrivateRouteProps;
    return (
        <Route path = { path } render = {( props) => {
            return isLoggedin ? <Component { ...props } /> : <Redirect to  = {{
                pathname: '/login',
                state: {
                    from: props.location
                }
            }} />
        }} />
    );
}




class App extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(fetchCourses());
        const token = getAuthToken();
        if (token) {
            const user = jwtDecode(token);
            this.props.dispatch(authenticateUser({
                email: user.email,
                _id: user.userId,
            }));
            this.props.dispatch(boughtCourses(user.userId));
        }
    }

    render () {
        const { courses, auth } = this.props;
        return (
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" render = {(props) => {
                        return <Dashboard {...props}  courses = {courses.allCourses} boughtCourses = {courses.boughtCourses} isLoggedin = {auth.isLoggedin}/>
                    }}/>
                    <Route path="/signup" component={ Signup } />
                    <PrivateRoute path="/mycourses" exact component={ MyCourses } isLoggedin={ auth.isLoggedin } />
                    <Route path="/login" component={ Login } />
                    <Route path="/paymentcard/:courseId" component={ PaymentCard } />
                    <Route path="/verifyotp/:courseId" component={ VerifyOtp } />
                    <Route path="/courseDetail/:courseId" component={ CourseDetail } />

                </Switch>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        courses: state.courses
    };
};

export default connect(mapStateToProps)(App);