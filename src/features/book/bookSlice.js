/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BookService from '../../api/bookService';

const initialState = {
  books: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const books = await BookService.get('books');
  return books;
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  await BookService.remove(`books/${id}`, { item_id: { id } });
});

export const createBook = createAsyncThunk('books/createBook', async (book) => {
  const newBook = await BookService.create('books', book);
  return newBook;
});

export const reconstructBooks = (books) => {
  const containter = [];
  Object.keys(books).forEach((key) => {
    const book = { ...books[key][0] };
    book.item_id = key;
    containter.push(book);
  });
  return containter;
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.books.push(action.payload);
      },
    },
    getAllBooks: {
      fetchBooks,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = reconstructBooks(action.payload.data);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(createBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBook.fulfilled, (state) => {
        state.status = 'succeeded';
        // state.books = action.payload.data;
      })
      .addCase(createBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(deleteBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = state.books.filter((book) => book.item_id !== action.meta.arg);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});

export const getAllBooks = (state) => state.books;
export const getBooksStatus = (state) => state.books;
export const getBooksError = (state) => state.books.error;

// actions
export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
