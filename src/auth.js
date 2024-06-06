import axios from 'axios';

const BASE_URL = 'https://ds2-backend-096a70ca1369.herokuapp.com';

export const getToken = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auction_app/v1/api/token/`, {
      username: username,
      password: password
    });
    return response.data.access;
  } catch (error) {
    console.error('Error fetching token:', error);
    return null;
  }
};
