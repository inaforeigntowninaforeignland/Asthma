import axios from 'axios';
import config from 'config';

const baseUrl = `${config.get('server.protocol')}://${config.get('server.ip')}:${config.get('server.port')}/`;

const api = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
});

api.interceptors.request.use((configuration) => {
  if (configuration.baseURL === baseUrl && !configuration.headers.Authorization) {
    const token = localStorage.getItem('token');

    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return configuration;
}, (error) => Promise.reject(error));

export default api;
