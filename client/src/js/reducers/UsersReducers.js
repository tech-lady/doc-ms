import * as types from '../actions/Types';

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_ALL_USERS:
      return action.users;
    case types.GET_USER:
      console.log(action.doc);
      return [action.users];
    default:
      return state;
  }
};
