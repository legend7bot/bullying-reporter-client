import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';

// Create Report
const createReport = async (reportData) => {
  const response = await axios.post(API_URL + 'report', reportData);
  return response.data;
};

// Register user
const getAll = async (userData) => {
  let config = {
    headers: {
      Authorization: 'Bearer ' + userData.token,
    },
  };
  const response = await axios.get(API_URL + 'dashboard/reports/all', config);
  return response.data;
};

const reportsService = {
  createReport,
  getAll,
};

export default reportsService;
