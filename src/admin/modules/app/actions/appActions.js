import { apiV0 } from 'src/admin/service/api';
import {
  SET_APP_TITLE,
  SET_CURRENT_USER
} from '../constants/appConstants'

export function setAppTitle(title) {
  return { type: SET_APP_TITLE, title }
}

export function setCurrentUser(currentUser) {
  return { type: SET_CURRENT_USER, currentUser }
}

export function fetchCurrentUser() {
  return dispatch => {
    apiV0.get(`current/`)
    .then(response => {
      dispatch(setCurrentUser(response.data));
    });
  }
}
