import React from 'react';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { deleteBook } from '../../features/book/bookSlice';
import './LessonCard.css';

const LessonCard = (lesson = {}) => {
  LessonCard.prototype = {
    lesson: PropTypes.object.isRequired,
    key: PropTypes.string.isRequired,
  };

  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(deleteBook(lesson.lesson.item_id));
    swal('Deleted', `"${lesson.lesson.title}" deleted successfully`, 'success');
  };

  return (
    <>
      <div className="lesson-card">
        <div className="col-1">
          <div className="lesson-info">
            <h4 className="lesson-genre">{lesson.lesson.category}</h4>
            <h2 className="lesson-title">{lesson.lesson.title}</h2>
            <div className="lesson-author">{lesson.lesson.author}</div>
          </div>
          <div className="lesson-actions">
            <ul>
              <li>
                <button type="button" className="btn-comment">
                  Comment
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn-remove"
                  onClick={removeBook}
                >
                  Remove
                </button>
              </li>
              <li>
                <button type="button" className="btn-edit">
                  Edit
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-2">
          <div className="lesson-progressBar" style={{ width: 65, height: 65 }}>
            <CircularProgressbar value="100" text="100" />
          </div>
          <div className="lesson-progress-numb">
            <p className="percentage">100 %</p>
            <p className="percentage-complete">Completed</p>
          </div>
        </div>
        <div className="col-3">
          <h4 className="current-chapter">CURRENT CHAPTER</h4>
          <p className="current-lesson">17</p>
          <button type="button" className="update-progress-btn">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </>
  );
};

export default LessonCard;
