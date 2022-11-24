import { createSlice } from '@reduxjs/toolkit';

import { newUser, userLogin, userLogout, fetchCurrentUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [newUser.pending](state) {
      state.error = null;
    },
    [newUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [newUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [userLogin.pending](state) {
      state.error = null;
    },
    [userLogin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [userLogin.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [userLogout.pending](state) {
      state.error = null;
    },
    [userLogout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [userLogout.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchCurrentUser.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [fetchCurrentUser.rejected](state, action) {
      state.isLoading = false;
      state.isLoggedIn = false;
    },
  },
});

export const userReducer = userSlice.reducer;
