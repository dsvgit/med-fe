import { FETCH_USER, UPDATE_USER, RESET_USER, CHANGE_USER_NAME, CHANGE_USER_EMAIL } from '../constants/userEditorConstants';

export default function (state, action) {
  if (typeof state === 'undefined' || action.type === RESET_USER) {
    state = {};
  }

  if (action.type === UPDATE_USER) {
    console.log('reducer update events', action.user);
    return action.user;
  }
  else if (action.type === CHANGE_USER_NAME) {
    return {
      ...state,
      username: action.username
    };
  }
  else if (action.type === CHANGE_USER_EMAIL) {
    return {
      ...state,
      email: action.email
    };
  }
  else {
    return state;
  }
}
