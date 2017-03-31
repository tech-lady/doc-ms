export default (state = {}, action) => {
  switch (action.type) {
  case 'SINGUP_SUCCESSFUL':
    return {}
  default:
    return state;
  }
};
