import { apiV0 } from 'src/admin/service/api';
import history from 'src/admin/service/history';
import {
  FETCH_USER,
  UPDATE_USER,
  RESET_USER,
  ADD_USER,
  SAVE_USER,
  CHANGE_USER_NAME,
  CHANGE_USER_EMAIL,
  CHANGE_USER_PASSWORD,
  CHANGE_USER_IS_ADMIN
} from '../constants/userEditorConstants';

function updateUserEditor(user) {
  return { type: UPDATE_USER, user };
}

export function changeUserName(username) {
  return { type: CHANGE_USER_NAME, username };
}

export function changeUserEmail(email) {
  return { type: CHANGE_USER_EMAIL, email };
}

export function changeUserPassword(password) {
  return { type: CHANGE_USER_PASSWORD, password };
}

export function changeUserIsAdmin(isAdmin) {
  return { type: CHANGE_USER_IS_ADMIN, isAdmin };
}

export function resetUserEditor() {
  return { type: RESET_USER };
}

export function addUser(_user) {
  return dispatch => {
    let user = Object.assign({}, _user);
    if (!user.password) {
      delete user.password;
    }
    apiV0.post(`users/`, {
      ...user,
      is_superuser: user.isAdmin
    })
    .then(response => {
      history.replace('/users');
    })
    .catch(() => {
      debugger;
      history.replace('/users');
    });
  }
}

export function saveUser(_user) {
  return dispatch => {
    let user = Object.assign({}, _user);
    if (!user.password) {
      delete user.password;
    }
    apiV0.patch(`users/${user.id}/`, {
      ...user,
      is_superuser: user.isAdmin
    })
    .then(response => {
      //dispatch(fetchUserEditor(user.id));
      history.replace('/users');
    })
    .catch(() => {
      debugger;
      history.replace('/users');
    });
  }
}

export function fetchUserEditor(id) {
  return dispatch => {
    apiV0.get(`users/${id}/`)
    .then(response => {
      let data = response.data;
      let user = {
        ...data,
        username: data.username,
        email: data.email,
        isAdmin: data.is_superuser,
        password: ''
      };
      dispatch(updateUserEditor(user));
    })
    .catch(() => {
      debugger;
    });
  }
}
