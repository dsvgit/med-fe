import _ from 'lodash';

import { apiV0 } from 'src/common/services/api';
import {
  USERS_LIST_FETCH_USERS_REQUEST,
  USERS_LIST_FETCH_USERS_SUCCEED,
  USERS_LIST_FETCH_USERS_FAILED,
  USERS_LIST_SELECT_USER,
  USERS_LIST_RESET,
  USERS_LIST_NEXT_PAGE,
  USERS_LIST_PREV_PAGE,
  USERS_LIST_CHANGE_FIELD
} from 'src/admin/actionTypes/users/list';


export function fetchUsers() {
  return (dispatch, getState) => {
    let state = _.get(getState(), 'users.list');
    let params = _.pick(state, ['page', 'pageSize', 'search']);

    dispatch(fetchUsersRequest());

    apiV0.get(`users/`, { params })
    .then(response => {
      dispatch(fetchUsersSucceed(response));
    })
    .catch(response => {
      dispatch(fetchUsersFailed(response));
    });
  }
}

const fetchUsersDebounced = _.debounce(dispatch => dispatch(fetchUsers()), 500);

function fetchUsersRequest(payload) {
  return { type: USERS_LIST_FETCH_USERS_REQUEST };
}

function fetchUsersSucceed(response) {
  let {
    users,
    total
    } = response.data;
  return { type: USERS_LIST_FETCH_USERS_SUCCEED, users, total };
}

function fetchUsersFailed(response) {
  return { type: USERS_LIST_FETCH_USERS_FAILED };
}

export function deleteUsers(ids) {
  return (dispatch, getState) => {
    let selected = getState().users.list.selected;
    let current = selected[0];
    if (!current) return;

    apiV0.delete(`user/${current}/`)
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

export function getNextPageData() {
  return dispatch => {
    dispatch(nextPage());
    dispatch(fetchUsers());
  };
}

export function getPrevPageData() {
  return dispatch => {
    dispatch(prevPage());
    dispatch(fetchUsers());
  };
}

function nextPage() {
  return { type: USERS_LIST_NEXT_PAGE };
}

function prevPage() {
  return { type: USERS_LIST_PREV_PAGE };
}

export function changeField(payload) {
  return dispatch => {
    dispatch({ type: USERS_LIST_CHANGE_FIELD, ...payload });
    fetchUsersDebounced(dispatch);
  };
}
