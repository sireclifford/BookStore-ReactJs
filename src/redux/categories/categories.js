// ACTIONS
const CHECK_STATUS = 'CHECK_STATUS';

// REDUCERS
export default function CategoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}

// ACTION CREATORS
export const checkStatus = () => ({
  type: CHECK_STATUS,
});
