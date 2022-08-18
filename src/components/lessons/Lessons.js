import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LessonCard from '../lessonCard/LessonCard';
import Alert from '../alert/Alert';
import AddBook from '../addBook/AddBook';
import './Lessons.css';
import {
  getAllBooks,
  getBooksStatus,
  // getBooksError,
  fetchBooks,
} from '../../features/book/bookSlice';

const Lessons = () => {
  const dispatch = useDispatch();
  const { books } = useSelector(getAllBooks);
  const { status } = useSelector(getBooksStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'succeeded') {
    if (books.length === 0) {
      content = <Alert />;
    } else {
      content = books.map((book) => <LessonCard key={book.id} lesson={book} />);
    }
  }

  return (
    <>
      <div className="lessons-content">
        <div className="lessons">
          {content}
        </div>
      </div>
      <AddBook />
    </>
  );
};

export default Lessons;
