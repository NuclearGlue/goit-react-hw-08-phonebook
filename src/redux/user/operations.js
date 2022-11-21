import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setUserHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearUserHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const newUser = createAsyncThunk(
  'users/addUser',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post(`/users/signup`, {
        name,
        email,
        password,
      });

      setUserHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'users/userLogin',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(`/users/login`, { email, password });
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  'users/userLogout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(`/users/logout`);
      clearUserHeader();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userInfo = createAsyncThunk(
  'users/addUser',
  async (user, thunkAPI) => {
    try {
      const response = await axios.get(`/users/current`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// export const userInfo = createAsyncThunk(
//   'users/addUser',
//   async (user, thunkAPI) => {
//     try {
//       const response = await axios.get(`/users/current`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
