import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL + '/token/';

const login = async () => {
  try {
    const response = await axios.post(API_URL, { 
      username: import.meta.env.VITE_API_USERNAME, 
      password: import.meta.env.VITE_API_PASSWORD 
    });
    if (response.data.access) {
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
    }
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export { login };
