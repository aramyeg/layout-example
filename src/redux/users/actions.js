export const FETCH_USERS_BY_QUERY = "FETCH_USERS_BY_QUERY";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

export function fetchUsersByQuery(queryParams) {
  return {
    type: FETCH_USERS_BY_QUERY,
    queryParams
  };
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  };
}

export function fetchUsersFail(error) {
  return {
    type: FETCH_USERS_FAIL,
    error
  };
}

const actions = {
  FETCH_USERS_BY_QUERY,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,

  fetchUsersByQuery,
  fetchUsersSuccess,
  fetchUsersFail
}

export default actions;