import { oauth } from 'src/admin/service/api';
import history from 'src/admin/service/history';
import { setCurrentUser } from 'src/admin/modules/app/actions/appActions';
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
  return { type: RESET_LOGIN };
}

export function login(credentials) {
  return dispatch => {
    dispatch(tryLogin());
    return oauth.post('token/', `grant_type=password&username=${credentials.login}&password=${credentials.password}`)
    .then(response => {
      sessionStorage.setItem('authToken', response.data.access_token);
      history.replace('/');
    })
    .catch(() => {
      dispatch(failedLogin());
    });
  }
}

export function logout() {
  return dispatch => {
    let handleLogout = response => {
      sessionStorage.setItem('authToken', '');
      history.replace('/login');
      dispatch(setCurrentUser(null));
    };

    return oauth.post('revoke_token/', `token=${sessionStorage.getItem('authToken')}`)
    .then(handleLogout)
    .catch(handleLogout);
  }
}
