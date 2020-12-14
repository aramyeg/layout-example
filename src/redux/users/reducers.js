import actions from './actions';

const initialState = {
  users: [],
  error: false,
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: [...action.users],
      };
    case actions.FETCH_USERS_FAIL:
      return {
        ...state,
        error: action.error
      };
  }
  return state;
}

export default usersReducer;