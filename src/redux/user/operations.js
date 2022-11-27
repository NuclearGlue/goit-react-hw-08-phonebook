import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const newUser = createAsyncThunk(
  'users/addUser',
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post(`/users/signup`, userInfo);
      console.log(response);
      token.set(response.data.token);

      return response.data;
    } catch (e) {
      if (e.message.includes('400')) {
        alert('Something wrong! Please chek your data');
      } else if (e.message.includes('500')) {
        alert('Server connection error. Please try again later');
      }

      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'users/userLogin',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(`/users/login`, { email, password });
      token.set(response.data.token);
      return response.data;
    } catch (e) {
      if (e.message.includes('400')) {
        alert('Something wrong! Please chek your data');
      } else if (e.message.includes('500')) {
        alert('Server connection error. Please try again later');
      }

      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  'users/userLogout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(`/users/logout`);
      token.unset();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const userToken = state.user.token;

    if (token === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(userToken);

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
