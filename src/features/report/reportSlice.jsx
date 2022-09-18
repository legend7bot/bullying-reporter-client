import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import reportsService from './reportService';

// const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  reports: [],
  isLoading: false,
};

export const getAllReports = createAsyncThunk('reports/all', async (user, thunkAPI) => {
  try {
    const user = thunkAPI.getState().auth.user.data;
    console.log('Get All Reports Thunk');
    return await reportsService.getAll(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const createReport = createAsyncThunk('reports/create', async (data, thunkAPI) => {
  try {
    return await reportsService.createReport(data);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllReports.pending]: (state) => {
      console.log('getAllReports pending');
      state.isLoading = true;
    },
    [getAllReports.fulfilled]: (state, action) => {
      console.log('getAllReports fulfilled');
      state.reports = action.payload;
      state.isLoading = false;
    },
    [getAllReports.rejected]: (state, action) => {
      console.log('getAllReports rejected');
    },
    [createReport.pending]: (state) => {
      console.log('createReport pending');
    },
    [createReport.fulfilled]: (state, action) => {
      console.log('createReport fulfilled');
    },
    [createReport.rejected]: (state, action) => {
      console.log('createReport rejected');
    },
  },
});

export default reportsSlice.reducer;
