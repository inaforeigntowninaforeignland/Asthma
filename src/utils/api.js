import axios from 'axios';

const protocol = 'http';
const ip = 'localhost';
const port = '8000';

const baseUrl = `${protocol}://${ip}:${port}/`;

const api = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
});

api.interceptors.request.use((configuration) => {
  if (configuration.baseURL === baseUrl && !configuration.headers.Authorization) {
    const token = localStorage.getItem('token');

    if (token) {
      // eslint-disable-next-line no-param-reassign
      configuration.headers.Authorization = `Bearer ${token}`;
    }
  }

  return configuration;
}, (error) => Promise.reject(error));

export default api;
