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

    apiV0.get(`users/${id}/`)
    .then(response => {
      dispatch(fetchUserSucceed(response));
    })
    .catch(response => {
      dispatch(fetchUserFailed(response));
    });
  }
}

function fetchUserSucceed(response) {
  let data = response.data;
  let user = {
    ...data,
    username: data.username,
    email: data.email,
    isAdmin: data.is_superuser,
    password: ''
  };
  return { type: USERS_EDITOR_FETCH_USER_SUCCEED, user };
}

function fetchUserFailed(response) {
  return { type: USERS_EDITOR_FETCH_USER_FAILED };
}

export function saveUser(_user) {
  return dispatch => {
    dispatch({ type: USERS_EDITOR_SAVE_USER });

    let user = Object.assign({}, _user);
    if (!user.password) {
      delete user.password;
    }

    let params = {
      ...user,
      is_superuser: user.isAdmin
    };

    let postPromise = apiV0.post(`users/`, params);
    let patchPromise = apiV0.patch(`users/${user.id}/`, params);

    let savePromise = user.id ? patchPromise : postPromise;

    savePromise
    .then(response => {
      dispatch(saveUserSucceed(response));
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
