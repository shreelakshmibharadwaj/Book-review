// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    books: bookReducer,
    user: userReducer,
  },
});
