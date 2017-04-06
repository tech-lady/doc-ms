import RoleApi from '../utils/RolesApi';
import * as types from './Types';


class Actions {
  static getAllRoles(roles) {
    return { type: types.GET_ALL_ROLES, roles };
  }

  static getRole(role) {
    return { type: types.GET_ROLE, role };
  }

  static createRole(role) {
    return { type: 'CREATE_ROLE', role };
  }

  static showRole(role) {
    return { type: types.SHOW_ROLE, role };
  }

  static updateRole(id) {
    return { type: 'DELETE_ROLE', id };
  }

  static deleteRole(id) {
    return { type: 'DELETE_ROLE', id };
  }

  static roleError(error) {
    return { type: 'ROLE_ERROR', error };
  }

  static roleSuccess(payload) {
    return { type: 'ROLE_SUCCESS', payload };
  }
}


export const loadRole = () => (dispatch) => {
  RoleApi.getAll()
    .then((roles) => {
      dispatch(Actions.getAllDocuments(roles));
    })
    .catch((error) => {
      throw (error);
    });
};


export const getRole = id => (dispatch) => {
  RoleApi.get(id)
  .then((role) => {
    dispatch(Actions.getRole(role));
  })
  .catch((error) => {
    dispatch(Actions.roleError(error));
  });
};


export const createRole = data => (dispatch) => {
  RoleApi.create(data)
    .then((res) => {
      dispatch(Actions.roleSuccess(res));
    })
    .catch(error => dispatch(error));
};


export const deleteRole = id => (dispatch) => {
  RoleApi.delete(id)
     .then((res) => {
       dispatch(Actions.roleSuccess(res));
     })
    .catch(error => dispatch(error));
};

export const updateRole = id => (dispatch) => {
  RoleApi.update(id)
     .then((res) => {
       dispatch(Actions.roleSuccess(res));
     })
    .catch(error => dispatch(error));
};
