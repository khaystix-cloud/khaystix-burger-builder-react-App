import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bc692.firebaseio.com/'
});

export default instance;