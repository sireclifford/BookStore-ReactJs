import { configureStore } from '@reduxjs/toolkit';
import CategoriesReducer from './categories/categories';
import BooksReducer from './books/books';

// configure redux store

const rootReducer = {
  categories: CategoriesReducer,
  books: BooksReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
