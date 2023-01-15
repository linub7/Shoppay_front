import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import cart from './slices/cartSlice';
import auth from './slices/authSlice';
import expand from './slices/expandSlice';

const reducers = combineReducers({ cart, auth, expand });

const config = {
  key: 'root',
  storage,
};

const reducer = persistReducer(config, reducers);

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
