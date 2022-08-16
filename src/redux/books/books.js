import uuid from 'react-uuid';

// ACTIONS
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// initial state
const initialState = [
  {
    id: uuid(),
    title: 'The Hunger Games',
    genre: 'Action',
    author: 'Suzanne Collins',
    percentage: 66,
    completed: false,
    currentChapter: 'Chapter 17',
  },
  {
    id: uuid(),
    title: 'Dune',
    genre: 'Science Fiction',
    author: 'Frank Herbert',
    percentage: 8,
    completed: false,
    currentChapter: 'Chapter 3, A lesson learned',
  },
  {
    id: uuid(),
    title: 'Capital in the Twenty-First Century',
    genre: 'Economics',
    author: 'Suzanne Collins',
    percentage: 5,
    completed: false,
    currentChapter: 'Introduction',
  },
  {
    id: uuid(),
    title: 'The Martian',
    genre: 'Science Fiction',
    author: 'Andy Weir',
    percentage: 100,
    completed: true,
    currentChapter: 'Chapter 30',
  },
  {
    id: uuid(),
    title: "Harry Potter and the Sorcerer's Stone",
    genre: 'Fantasy',
    author: 'J.K. Rowling',
    percentage: 50,
    completed: false,
    currentChapter: 'Chapter 45',
  },
];

// REDUCERS
export default function BooksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// ACTION CREATORS
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
