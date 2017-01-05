import { apiV0 } from 'src/admin/service/api';
import {
  UPDATE_USERS,
  FETCH_USERS,
  USERS_SELECT
} from '../constants/usersConstants';


function updateUsers(users) {
  return { type: UPDATE_USERS, users };
}

export function fetchUsers() {
  return dispatch => {
    apiV0.get(`users/`)
    .then(response => {
      dispatch(updateUsers(response.data));
    });
  }
}

export function deleteUsers(ids) {
  return (dispatch, getState) => {
    let selected = getState().users.selected;
    let current = selected[0];
    if (!current) return;

    apiV0.delete(`users/${current}/`)
    .then(response => {
      dispatch(fetchUsers());
    })
    .catch(() => {
      debugger;
    });
  }
}

export function usersSelect(selected) {
  return { type: USERS_SELECT, selected };
}
