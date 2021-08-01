import axios from 'axios';

export default axios.create({
    baseURL: 'https://simplilearnproject.herokuapp.com/api'
});
