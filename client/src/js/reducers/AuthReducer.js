import { AUTH_USER, UN_AUTH_USER, AUTH_ERROR } from '../actions/Types';

export default (state = { authenticated: false }, action) => {
  switch (action.type) {
    case AUTH_USER:
      return Object.assign({}, state, { authenticated: true });
    case UN_AUTH_USER:
      return Object.assign({}, state, { authenticated: false });
    case AUTH_ERROR:
      return Object.assign({}, state, { authenticated: true, error: action.payload });
    default:
      return state;
  }
};
