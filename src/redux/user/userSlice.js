import { createSlice } from '@reduxjs/toolkit';

import {
  newUser,
  userLogin,
  userLogout,
  userInfo,
} from '../contacts/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlise = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: '',
      name: '',
      email: '',
      password: '',
    },
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [userLogin.pending]: handlePending,
    [userLogin.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
    [userLogin.rejected]: handleRejected,
  },
});
