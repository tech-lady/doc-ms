import * as types from '../actions/Types';

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_ALL_DOCUMENTS:
      return action.documents;
    case types.GET_DOCUMENT:
      console.log(action.doc);
      return [action.doc];
    case types.DOCUMENT_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
