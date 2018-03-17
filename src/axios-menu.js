import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://menu-22a31.firebaseio.com'
});

export default instance;