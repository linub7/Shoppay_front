import { createSlice } from '@reduxjs/toolkit';
import Cookie from 'js-cookie';

const token = Cookie.get('userData')
  ? JSON.parse(Cookie.get('userData')).token
  : null;
const userData = Cookie.get('userData')
  ? JSON.parse(Cookie.get('userData')).userData
  : null;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token,
    userData,
  },
  reducers: {
    authenticate: (state, action) => {
      const {
        payload: { token, userData },
      } = action;
      state.token = token;
      state.userData = userData;
    },
    logout: (state, action) => {
      state.token = null;
      state.userData = null;
    },
  },
});

export const {
  actions: { authenticate, logout },
} = authSlice;

export default authSlice.reducer;
