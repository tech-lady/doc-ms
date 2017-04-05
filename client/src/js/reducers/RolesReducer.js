import * as types from '../actions/Types';

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_ALL_ROLES:
      return action.roles;
    case types.GET_ROLES:
      console.log(action.role);
      return [action.role];
    default:
      return state;
  }
};
