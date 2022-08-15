import React from 'react';
import './LessonCard.css';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const LessonCard = (lesson = []) => {
  LessonCard.prototype = {
    lesson: PropTypes.object.isRequired,
  };

  return (
    <>
      <div className="lesson-card">
        <div className="col-1">
          <div className="lesson-info">
            <h4 className="lesson-genre">{lesson.lesson.genre}</h4>
            <h2 className="lesson-title">{lesson.lesson.title}</h2>
            <div className="lesson-author">{lesson.lesson.author}</div>
          </div>
          <div className="lesson-actions">
            <ul>
              <li>Comments</li>
              <li>Remove</li>
              <li>Edit</li>
            </ul>
          </div>
        </div>
        <div className="col-2">
          <div className="lesson-progressBar" style={{ width: 65, height: 65 }}>
            <CircularProgressbar
              value={lesson.lesson.percentage}
              text={`${lesson.lesson.percentage}%`}
            />
          </div>
          <div className="lesson-progress-numb">
            <p className="percentage">
              {lesson.lesson.percentage}
              %
            </p>
            <p className="percentage-complete">Completed</p>
          </div>
        </div>
        <div className="col-3">
          <h4 className="current-chapter">CURRENT CHAPTER</h4>
          <p className="current-lesson">{lesson.lesson.currentChapter}</p>
          <button type="button" className="update-progress-btn">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </>
  );
};

export default LessonCard;
