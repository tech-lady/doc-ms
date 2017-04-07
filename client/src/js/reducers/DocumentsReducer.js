import * as types from '../actions/Types';

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_ALL_DOCUMENTS:
      return action.documents;
    case types.GET_DOCUMENT:
      return [action.doc];
    case types.DOCUMENT_SUCCESS:
      return [...state, action.payload];
    case types.DELETE_DOCUMENT:
      return state.filter(doc => action.id !== doc.id);
    default:
      return state;
  }
};
