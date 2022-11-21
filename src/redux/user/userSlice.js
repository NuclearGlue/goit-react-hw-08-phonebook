import { createSlice } from '@reduxjs/toolkit';

import { newUser, userLogin, userLogout } from '../contacts/operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [newUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [userLogin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [userLogout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const userReducer = userSlice.reducer;
