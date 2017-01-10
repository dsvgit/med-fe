import { apiV0 } from 'src/common/services/api';
import {
  USERS_LIST_FETCH_USERS,
  USERS_LIST_FETCH_USERS_SUCCEED,
  USERS_LIST_FETCH_USERS_FAILED,
  USERS_LIST_SELECT_USER,
  USERS_LIST_RESET
} from 'src/admin/actionTypes/users/list';


export function fetchUsers() {
  return dispatch => {
    dispatch({ type: USERS_LIST_FETCH_USERS });

    apiV0.get(`users/`)
    .then(response => {
      dispatch(fetchUsersSucceed(response));
    })
    .catch(response => {
      dispatch(fetchUsersFailed(response));
    });
  }
}

function fetchUsersSucceed(response) {
  return { type: USERS_LIST_FETCH_USERS_SUCCEED, users: response.data };
}

function fetchUsersFailed(response) {
  return { type: USERS_LIST_FETCH_USERS_FAILED };
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
      console.log('deleteUsers failed');
    });
  }
}

export function usersSelect(selected) {
  return { type: USERS_LIST_SELECT_USER, selected };
}

export function reset() {
  return { type: USERS_LIST_RESET };
}
