import { combineReducers } from 'redux';
import documents from './DocumentsReducer';
import authenticated from './AuthReducer';
import users from './UsersReducers';

export default combineReducers({
  documents,
  users,
  authenticated
});
