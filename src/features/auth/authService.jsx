import axios from 'axios';

const API_URL = 'https://bullying-reporter.herokuapp.com/api/';

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'signin', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.data));
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
