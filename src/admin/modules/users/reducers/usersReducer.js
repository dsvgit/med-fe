import {
  UPDATE_USERS,
  FETCH_USERS,
  USERS_SELECT
} from '../constants/usersConstants';


export default function (state, action) {
  if (typeof state === 'undefined') {
    state = {
      data: [],
      selected: []
    };
  }

  if (action.type === UPDATE_USERS) {
    return {
      ...state,
      data: action.users
    };
  }
  else if (action.type === USERS_SELECT) {
    return {
      ...state,
      selected: action.selected
    };
  }
  else {
    return state;
  }
}
