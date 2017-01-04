import { UPDATE_USERS, FETCH_USERS } from '../constants/usersConstants'

export default function (state, action) {
  if (typeof state === 'undefined') {
    state = [];
  }

  if (action.type === UPDATE_USERS) {
    return action.users;
  }
  else {
    return state;
  }
}
