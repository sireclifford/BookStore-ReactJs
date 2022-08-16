import React from 'react';
import { useSelector } from 'react-redux';
import LessonCard from '../lessonCard/LessonCard';
import AddBook from '../addBook/AddBook';

import './Lessons.css';

const Lessons = () => {
  const state = useSelector((state) => state);
  const { books } = state;

  return (
    <>
      <div className="lessons-content">
        <div className="lessons">
          {books.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>
      <AddBook />
    </>
  );
};

export default Lessons;
