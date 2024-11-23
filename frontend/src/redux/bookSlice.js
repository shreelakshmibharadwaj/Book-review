// src/redux/bookSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks, fetchBookDetails } from '../services/api';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await fetchBooks();
  return response.data;
});

export const getBookDetails = createAsyncThunk(
  'books/getBookDetails',
  async (id) => {
    const response = await fetchBookDetails(id);
    return response.data;
  }
);

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    list: [],
    selectedBook: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getBookDetails.fulfilled, (state, action) => {
        state.selectedBook = action.payload;
      });
  },
});

export default bookSlice.reducer;
