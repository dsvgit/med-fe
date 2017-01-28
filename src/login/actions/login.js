var param = require('jquery-param');

import { oauth } from 'src/common/services/api';
import history from 'src/login/services/history';
import {
  LOGIN_LOG_IN,
  LOGIN_LOG_IN_SUCCEED,
  LOGIN_LOG_IN_FAILED,
  LOGIN_CHANGE_FIELD,
  LOGIN_RESET
} from 'src/login/actionTypes/login';
import go from 'src/login/services/redirects';

export function open() {
  return { type: LOGIN_RESET };
}

export function login({ login, password }) {
  return dispatch => {
    dispatch({ type: LOGIN_LOG_IN });

    let body = param({
      login,
      password
    });

    let timeout = 800;
    return oauth.post('', body)
    .then(response => {
      setTimeout(() => dispatch(loginSucceed(response)), timeout);
    })
    .catch(response => {
      setTimeout(() => dispatch(loginFailed(response)), timeout);
    });
  }
}

function loginSucceed(response) {
  let { data : { token } } = response;
  sessionStorage.setItem('authToken', token);
  go.to.app();
  return { type: LOGIN_LOG_IN_SUCCEED };
}

function loginFailed(response) {
  return { type: LOGIN_LOG_IN_FAILED };
}

export function changeField(payload) {
  return { type: LOGIN_CHANGE_FIELD, ...payload };
}

export function reset() {
  return { type: LOGIN_RESET };
}
