import axios from 'axios';

const hostname = window && window.location && window.location.hostname;

const axiosApi = axios.create({
  baseURL: hostname === 'localhost' ? 'http://localhost:8888/' : 'https://react-sweet-potato.vercel.app/',
  headers: { 'X-Custom-Header': 'foobar' },
  timeout: 10000,
});

export default axiosApi;
