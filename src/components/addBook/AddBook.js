import React from 'react';
import './AddBook.css';

const AddBook = () => (
  <div className="add-book">
    <div className="content">
      <div className="heading">
        <h1>Add New Book</h1>
      </div>
      <div className="add-book-form">
        <div className="title mb-3 mr-10">
          <div className="inputTitle" type="text" placeholder="Book Title" />
        </div>

        <div aria-label="Category">
          <option>Category</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
        </div>
        <button className="addBookBtn" variant="primary" type="submit">
          ADD BOOK
        </button>
      </div>
    </div>
  </div>
);

export default AddBook;
