import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
});

api.interceptors.response.use(
  r => r,
  e => {
    alert(e.response?.data?.detail || 'Login failed');
    return Promise.reject(e);
  }
);

export default api;
