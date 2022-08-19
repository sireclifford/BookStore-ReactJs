import React from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import './Category.css';

const Category = () => {
  const state = useSelector((state) => state);
  // const { status } = state;
  // const dispatch = useDispatch();

  const handleStatus = () => {
    // dispatch(checkStatus);
    swal(`${state.categories.status}`);
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
