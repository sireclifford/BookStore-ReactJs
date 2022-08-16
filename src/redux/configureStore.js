import { configureStore } from '@reduxjs/toolkit';
import CategoriesReducer from './categories/categories';
import BooksReducer from './books/books';

// configure redux store
const store = configureStore({
  rootReducer: {
    categories: CategoriesReducer,
    books: BooksReducer,
  },
});

export default store;
