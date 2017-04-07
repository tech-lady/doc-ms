import * as types from '../actions/Types';

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_ALL_USERS:
      return action.users;
    case types.GET_USER:
      return [action.user];
    default:
      return state;
  }
};
