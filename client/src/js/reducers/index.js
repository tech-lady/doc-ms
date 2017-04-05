import { combineReducers } from 'redux';
import documents from './DocumentsReducer';
import authenticated from './AuthReducer';
import users from './UsersReducers';
import roles from './RolesReducer';

export default combineReducers({
  documents,
  users,
  roles,
  authenticated
});
