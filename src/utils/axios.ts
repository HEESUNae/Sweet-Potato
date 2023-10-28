import axios from 'axios';

const hostname = window && window.location && window.location.hostname;

const axiosApi = axios.create({
  // baseURL: hostname === 'localhost' ? 'http://localhost:8888/' : 'https://sweet-potato.vercel.app/',
  baseURL: hostname === 'localhost' ? 'http://localhost:8888/' : '/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
    'Access-Control-Allow-Headers':
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  },
  timeout: 5000,
});

export default axiosApi;
