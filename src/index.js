import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';

import App from './components/App';
import './assets/css/navbar.css';

const store = configureStore();
ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store} >
            <App />
        </Provider>
    </React.StrictMode>,
    document.querySelector('#root')
);