import { combineReducers } from 'redux'
import homeReducer from './homeReducer';
import repositoriesReducer from './repositoriesReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  Home: homeReducer,
  Repositories: repositoriesReducer,
  Users: usersReducer,
})