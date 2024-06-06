import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ds2-backend-096a70ca1369.herokuapp.com/auction_app/v1/api',
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
