import requester from 'src/admin/service/requester';
import api from 'src/admin/service/api';
import history from 'src/admin/service/history';
import { FETCH_USER, UPDATE_USER, RESET_USER, ADD_USER, SAVE_USER, CHANGE_USER_NAME, CHANGE_USER_EMAIL } from '../constants/userEditorConstants';

function updateUserEditor(user) {
  console.log('action update events', user);
  return { type: UPDATE_USER, user };
}

export function changeUserName(username) {
  console.log('action update events', username);
  return { type: CHANGE_USER_NAME, username };
}

export function changeUserEmail(email) {
  console.log('action update events', email);
  return { type: CHANGE_USER_EMAIL, email };
}

export function addUser(user) {
  return dispatch => {
    return requester.post(api(`users/`), user)
    .then(response => {
      history.replace('/users');
    })
    .catch(() => {
      debugger;
      history.replace('/users');
    });
  }
}

export function saveUser(user) {
  return dispatch => {
    requester.patch(api(`users/${user.id}/`), user)
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

export function resetUserEditor() {
  return { type: RESET_USER };
}

export function fetchUserEditor(id) {
  return dispatch => {
    requester.get(api(`users/${id}`))
    .then(response => {
      dispatch(updateUserEditor(response.data));
    })
    .catch(() => {
      debugger;
    });
  }
}
