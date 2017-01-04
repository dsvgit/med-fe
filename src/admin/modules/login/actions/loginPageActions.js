import { tokenRequester } from 'src/admin/service/requester';
import { getToken } from 'src/admin/service/api';
import history from 'src/admin/service/history';
import { TRY_LOGIN, FAILED_LOGIN, CHANGE_LOGIN, CHANGE_PASSWORD, RESET_LOGIN } from '../constants/loginPageConstants';

export function changeLogin(login) {
  return { type: CHANGE_LOGIN, login };
}

export function changePassword(password) {
  return { type: CHANGE_PASSWORD, password };
}

function tryLogin() {
  return { type: TRY_LOGIN };
}

function failedLogin() {
  return { type: FAILED_LOGIN };
}

export function resetLogin() {
  return { type: RESET_LOGIN }
}

export function login(credentials) {
  return dispatch => {
    dispatch(tryLogin());
    return tokenRequester.post(getToken(), `grant_type=password&username=${credentials.login}&password=${credentials.password}`)
    .then(response => {
      debugger;
      sessionStorage.setItem('authToken', response.data.access_token);
      history.replace('/');
    })
    .catch(() => {
      dispatch(failedLogin());
    });
  }
}

export function logout() {
  debugger;
  sessionStorage.setItem('authToken', '');
  history.replace('/login');
}
