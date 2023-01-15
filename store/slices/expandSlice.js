import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expandSidebar: true,
};

export const expandSlice = createSlice({
  name: 'expand',
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.expandSidebar = !state.expandSidebar;
    },
  },
});

export const {
  actions: { toggleSidebar },
} = expandSlice;

export default expandSlice.reducer;
