import React from 'react';
// Components import
import Header from './Header';
import Signup from './Signup';

class App extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <Signup />
            </div>
        );
    };
}

export default App;