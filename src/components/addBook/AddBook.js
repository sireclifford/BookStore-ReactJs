import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import swal from 'sweetalert';
import { addBook } from '../../redux/books/books';
import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
    genre: 'Action',
    percentage: 66,
    completed: false,
    currentChapter: 'Chapter 17',
  });

  const handleChange = (e) => {
    const { name } = e.target;
    setBook({
      ...book,
      id: uuid(),
      [name]: e.target.value,
      genre: 'Action',
      percentage: 66,
      completed: false,
      currentChapter: 'Chapter 17',

    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    swal('Success', `"${book.title}" added Successfully`, 'success');
    setBook({
      title: '',
      author: '',
    });
  };

  return (
    <div className="add-book">
      <div className="content">
        <div className="heading">
          <h1>Add New Book</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="title"
            className="inputTitle"
            type="text"
            placeholder="Book Title"
            value={book.title || ''}
            onChange={handleChange}
          />
          <input
            name="author"
            className="inputAuthor"
            type="text"
            placeholder="Book Author"
            value={book.author || ''}
            onChange={handleChange}
          />
          <input className="addBookBtn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
export default AddBook;
