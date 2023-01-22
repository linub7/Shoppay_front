import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: true,
  header: 'Error Creating Product',
  msgs: [
    {
      msg: 'Choose at least 2 images.',
      type: 'error',
    },
    {
      msg: 'Choose at least 2 images.',
      type: 'success',
    },
  ],
  link: {
    link: '',
    linkText: '',
  },
};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    showDialog: (state, action) => {
      const {
        payload: { header, msgs, link },
      } = action;
      state.show = true;
      state.header = header;
      state.msgs = msgs;
      state.link = link;
    },
    hideDialog: (state, action) => {
      state.show = false;
      state.header = '';
      state.msgs = [];
      state.link = {};
    },
  },
});

export const {
  actions: { showDialog, hideDialog },
} = dialogSlice;

export default dialogSlice.reducer;
