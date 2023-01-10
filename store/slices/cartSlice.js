import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      state.cartItems.push(payload);
    },
    updateCart: (state, action) => {
      const { payload } = action;
      state.cartItems = payload;
    },
    emptyCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const {
  actions: { addToCart, updateCart, emptyCart },
} = cartSlice;

export default cartSlice.reducer;
