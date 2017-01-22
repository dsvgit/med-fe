import { apiV0 } from 'src/common/services/api';
import history from 'src/admin/services/history';
import {
  USERS_EDITOR_FETCH_USER,
  USERS_EDITOR_FETCH_USER_SUCCEED,
  USERS_EDITOR_FETCH_USER_FAILED,
  USERS_EDITOR_SAVE_USER,
  USERS_EDITOR_SAVE_USER_SUCCEED,
  USERS_EDITOR_SAVE_USER_FAILED,
  USERS_EDITOR_CHANGE_FIELD,
  USERS_EDITOR_RESET
} from 'src/admin/actionTypes/users/editor';


export function fetchUser(id) {
  return dispatch => {
    dispatch({ type: USERS_EDITOR_FETCH_USER });

    apiV0.get(`user/${id}/`)
    .then(response => {
      dispatch(fetchUserSucceed(response));
    })
    .catch(response => {
      dispatch(fetchUserFailed(response));
      history.replace('/users');
    });
  }
}

function fetchUserSucceed(response) {
  let data = response.data;
  let user = {
    ...data,
    password: ''
  };
  return { type: USERS_EDITOR_FETCH_USER_SUCCEED, user };
}

function fetchUserFailed(response) {
  return { type: USERS_EDITOR_FETCH_USER_FAILED };
}

export function saveUser(user) {
  return dispatch => {
    dispatch({ type: USERS_EDITOR_SAVE_USER });

    let params = {
      login: user.login,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      isAdmin: user.isAdmin
    };
    let { id, password } = user;
    if (id) params.id = id;
    if (password) params.password = password;

    let savePromise;
    if (!user.id) {
      savePromise = apiV0.post(`user/`, params);
    } else {
      savePromise = apiV0.patch(`user/${user.id}/`, params);
    }

    savePromise
    .then(response => {
      dispatch(saveUserSucceed(response));
      history.replace('/users');
    })
    .catch(response => {
      dispatch(saveUserFailed(response));
    });
  }
}

function saveUserSucceed(response) {
  return { type: USERS_EDITOR_SAVE_USER_SUCCEED, user: response.data };
}

function saveUserFailed(response) {
  return { type: USERS_EDITOR_SAVE_USER_FAILED };
}

export function changeField(payload) {
  return { type: USERS_EDITOR_CHANGE_FIELD, ...payload };
}

export function reset() {
  return { type: USERS_EDITOR_RESET };
}
