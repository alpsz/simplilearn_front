import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components import
import Header from './Header';
import Signup from './Signup';
import Dashboard from './Dashboard';
import MyCourses from './MyCourses';
import Login from './Login';

class App extends React.Component {
    render () {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={ Dashboard } />
                    <Route path="/signup" component={ Signup } />
                    <Route path="/mycourses" component={ MyCourses } />
                    <Route path="/login" component={ Login } />
                </Switch>
            </Router>
        );
    }
}

export default App;