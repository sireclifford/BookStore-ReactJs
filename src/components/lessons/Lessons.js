import React from 'react';
import './Lessons.css';
import uuid from 'react-uuid';
import LessonCard from '../lessonCard/LessonCard';
import AddBook from '../addBook/AddBook';

const Lessons = () => {
  const lessons = [
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

  return (
    <>
      <div className="lessons-content">
        <div className="lessons">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>
      <AddBook />
    </>
  );
};

export default Lessons;
