// ACTIONS
const CHECK_STATUS = 'CHECK_STATUS';

const initialState = {
  status: 'Under Construction',
};

// REDUCERS
export default function StatusReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHECK_STATUS':
      return 'Under Construction';
    default:
      return state;
  }
}

// ACTION CREATORS
export const checkStatus = () => ({
  type: CHECK_STATUS,
});
