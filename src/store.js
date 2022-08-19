import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import bookReducer from './features/book/bookSlice';

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const customisedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export default configureStore({
  reducer: {
    books: bookReducer,
  },
  middleware: customisedMiddleware,
});
