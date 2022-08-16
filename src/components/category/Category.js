import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { checkStatus } from '../../redux/status/status';
import './Category.css';

const Category = () => {
  const state = useSelector((state) => state);
  // const { status } = state;
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(checkStatus);
    swal(`${state.status.status}`);
  };
  return (
    <>
      <div className="category-content">
        <div className="category-button">
          <button onClick={handleStatus} type="button" className="check-status-btn">
            Check status
          </button>
        </div>
      </div>
    </>
  );
};

export default Category;
