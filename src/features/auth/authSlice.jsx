import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isLogin: user ? true : false,
  isError: false,
  message: '',
};

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLogin = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      console.log('login pending');
    },
    [login.fulfilled]: (state, action) => {
      console.log('Login fulfilled');
      state.isLogin = true;
      state.message = action.payload.message;
    },
    [login.rejected]: (state, action) => {
      console.log('login rejected');
      state.isError = true;
      state.message = action.payload;
    },
    [logout.pending]: (state) => {
      console.log('logout pending');
    },
    [logout.fulfilled]: (state) => {
      console.log('logout fulfilled');
      state.isLogin = false;
    },
    [logout.rejected]: (state) => {
      console.log('logout rejected');
    },
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
