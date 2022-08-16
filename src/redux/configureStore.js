import { configureStore } from '@reduxjs/toolkit';
import CategoriesReducer from './categories/categories';
import BooksReducer from './books/books';
import StatusReducer from './status/status';

// configure redux store

const rootReducer = {
  categories: CategoriesReducer,
  books: BooksReducer,
  status: StatusReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
