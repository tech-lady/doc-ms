import { combineReducers } from 'redux';
import documents from './DocumentsReducer';
import signUp from './SignUpReducer';
import authenticated from './AuthReducer';


export default combineReducers({
  documents,
  authenticated
});
