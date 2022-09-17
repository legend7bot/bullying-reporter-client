import axios from 'axios';

const API_URL = 'https://reqres.in/api/';

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData);

  if (response.data) {
    console.log('Response Data: ', response.data);
    localStorage.setItem('user', JSON.stringify(response.data.token));
  }

  return response.data;
};

// Logout user
const logout = () => {
  console.log('Logout');
  localStorage.removeItem('user');
};

const authService = {
  logout,
  login,
};

export default authService;
