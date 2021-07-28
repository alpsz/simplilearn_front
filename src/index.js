import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/css/navbar.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#root')
);