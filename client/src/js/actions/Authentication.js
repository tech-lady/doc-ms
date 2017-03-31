import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UN_AUTH_USER,
  AUTH_ERROR,

 } from './Types';
import axios from '../utils/index';
import { setToken, removeToken } from '../utils/helpers';

export const signInUser = ({ email, password }) => (dispatch) => {
  axios.post('/users/login', { email, password })
    .then((res) => {
      setToken(res.data.token);

      dispatch({ type: AUTH_USER });

      browserHistory.push('/dashboard');
    })
    .catch((err) => {
      dispatch({ type: AUTH_ERROR, payload: err.response.data.message });
    });
};

export const logoutUser = () => (dispatch) => {
  axios.post('/users/logout')
    .then(() => {
      removeToken();
      browserHistory.push('/');
      dispatch({ type: UN_AUTH_USER });
    });
};


export const registerUser =
  ({ firstname, lastname, username, email, password }) => (dispatch) => {
    axios.post('/users', { firstname, lastname, username, email, password })
    .then((res) => {
      console.log(res.data);
      setToken(res.data.token);

      dispatch({ type: AUTH_USER });

      browserHistory.push('/dashboard');
    })
    .catch((err) => {
      // dispatch({ type: AUTH_ERROR, payload: err.response.data.message });
    });
  };

export const authenticate = () => (dispatch) => {
  dispatch({ type: AUTH_USER });
};
