import requester from 'src/admin/service/requester';
import api from 'src/admin/service/api';
import { UPDATE_USERS, FETCH_USERS } from '../constants/usersConstants';

function updateUsers(users) {
  console.log('action update events', users);
  return { type: UPDATE_USERS, users}
}

export function fetchUsers() {
  return dispatch => {
    requester.get(api('users/'))
    .then(response => {
      dispatch(updateUsers(response.data));
    });
  }
}
