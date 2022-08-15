import React from 'react';
import './AddBook.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddBook = () => (
  <div className="add-book">
    <div className="content">
      <div className="heading">
        <h1>Add New Book</h1>
      </div>
      <Form className="add-book-form">
        <Form.Group className="title mb-3 mr-10" controlId="title">
          <Form.Control
            className="inputTitle"
            type="text"
            placeholder="Book Title"
          />
        </Form.Group>

        <Form.Select aria-label="Category">
          <option>Category</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
        </Form.Select>
        <Button className="addBookBtn" variant="primary" type="submit">
          ADD BOOK
        </Button>
      </Form>
    </div>
  </div>
);

export default AddBook;
