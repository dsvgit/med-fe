import { apiV0, oauth } from 'src/common/services/api';
import go from 'src/client/services/redirects';
import {
  APP_SET_TITLE,
  APP_SET_CURRENT_USER,
  APP_OPEN_SIDEBAR,
  APP_CLOSE_SIDEBAR
} from 'src/client/actionTypes/app';

export function setTitle(title) {
  return { type: APP_SET_TITLE, title }
}

export function setCurrentUser(currentUser) {
  return { type: APP_SET_CURRENT_USER, currentUser }
}

export function fetchCurrentUser() {
  return dispatch => {
    apiV0.get(`current/`)
    .then(response => {
      dispatch(setCurrentUser(response.data));
    });
  }
}

export function logout() {
  return dispatch => {
    let handleLogout = response => {
      sessionStorage.setItem('authToken', '');
      go.to.login();
      dispatch(setCurrentUser(null));
    };

    return oauth.post('revoke_token/', `token=${sessionStorage.getItem('authToken')}`)
    .then(handleLogout)
    .catch(handleLogout);
  }
}

export function openSidebar() {
  return { type: APP_OPEN_SIDEBAR }
}

export function closeSidebar() {
  return { type: APP_CLOSE_SIDEBAR }
}
