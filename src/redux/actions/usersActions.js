export const LOAD_USERS_BY_QUERY = "LOAD_USERS_BY_QUERY";

export function loadUsersByQuery(usersArr) {
  return {
    type: LOAD_USERS_BY_QUERY,
    payload: usersArr,
  };
}