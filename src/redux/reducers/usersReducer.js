import {LOAD_USERS_BY_QUERY} from '../actions/usersAnctions';

const initialState = {
  users : [],
};

function usersReducer(state = initialState, action){
  switch (action.type) {
    case LOAD_USERS_BY_QUERY:
      return {
        ...state,
        users : [...action.payload],
      };
  }
  return state;
}

export default usersReducer;