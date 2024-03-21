import axios from 'axios';

const instance = axios.create({
 //baseURL: 'http://localhost:5000',
  baseURL: 'https://metabet247.onrender.com',
});
 
export default instance;